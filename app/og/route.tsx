import { ImageResponse } from "next/og";

export const runtime = "edge";

async function loadGoogleFont (font: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`
  const css = await (await fetch(url)).text()
  const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/)

  if (resource) {
    const response = await fetch(resource[1])
    if (response.status == 200) {
      return await response.arrayBuffer()
    }
  }

  throw new Error('failed to load font data')
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Rajdeep Das";

  return new ImageResponse(
    (
      <div
        tw="relative flex w-full h-full bg-white"
        style={{
          fontFamily: "Figtree"
        }}
      >
        <div tw="absolute flex bottom-16 left-16 right-16">
          <h1 tw="text-6xl font-bold text-neutral-900 leading-tight">
            {title}
          </h1>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Figtree",
          data: await loadGoogleFont("Figtree:wght@600", title),
          style: "normal",
        }
      ]
    }
  );
}
