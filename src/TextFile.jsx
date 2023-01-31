import { useState } from "react";
import { useEffect } from "react";

const get_text_file = async (filepath) => {
  // prefix public dir files with `process.env.PUBLIC_URL`
  // see https://create-react-app.dev/docs/using-the-public-folder/
  const res = await fetch(`${process.env.PUBLIC_URL}/${filepath}`);

  // check for errors
  if (!res.ok) {
    throw res;
  }

  return res.text();
};

export function TextFile({ fileName }) {
  const [text, setText] = useState(""); // init with an empty string

  useEffect(() => {
    get_text_file(`${fileName}`).then(setText).catch(console.error);
  }, [fileName]);
  return (
    <>
      <p>{text}</p>
    </>
  );
}
