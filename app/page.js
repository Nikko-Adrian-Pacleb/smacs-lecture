import getFolderList from "@/utils/getFoldersList";
import Link from "next/link";
// import getPostMetaData from "@/utils/getPostMetadata";

export default function Home() {
  // const postMetaData = getPostMetaData("notes");
  const folders = getFolderList("notes");
  return (
    <div>
      <h1>Home Page</h1>
      <h1>List of Subjects: </h1>
      {folders.map((notes, notesIndex) => {
        return (
          <div key={notesIndex}>
            <a href={`/${notes}`}>{`${notes}`}</a>
          </div>
        );
      })}
    </div>
  );
}
