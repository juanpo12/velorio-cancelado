import * as React from "react"

interface ArticleCardProps {
  title?: string
  content: React.ReactNode
  hasBorder?: boolean
  hasParagraphs?: boolean
}

export function ArticleCard({ title, content, hasBorder}: ArticleCardProps) {
  return (
    <div>
      {title && (
        <h3 className={`text-2xl font-bold ${hasBorder ? "border-b-2 border-black pb-2 mb-4" : "mb-2"}`}>
          {title.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < title.split("\n").length - 1 && <br />}
            </React.Fragment>
          ))}
        </h3>
      )}

      {/* {hasParagraphs ? (
        content?.split("\n\n").map((paragraph, index) => (
          <p key={index} className={`text-sm md:text-base leading-relaxed ${index > 0 ? "mt-4" : ""}`}>
            {paragraph}
          </p>
        ))
      ) : ( */}
        <p className="text-sm md:text-base leading-relaxed">{content}</p>
      {/* )} */}
    </div>
  )
}

