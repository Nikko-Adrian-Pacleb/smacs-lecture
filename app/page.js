import getPostMetaData from "@/utils/getPostMetadata";

export default function Home() {
  const postMetaData = getPostMetaData("physics");

  return (
    <main>
      {postMetaData.map((chapter, chapterIndex) => {
        return (
          <div key={chapterIndex}>
            <a href={`/physics/${chapter.slug}`}>{`${chapter.title}`}</a>
          </div>
        );
      })}
    </main>
  );
}
