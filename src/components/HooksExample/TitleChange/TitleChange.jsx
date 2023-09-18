import React, { useEffect, useState } from "react";

function TitleChange() {
  const [num, setNum] = useState(0);

  // called when num state changed
  useEffect(() => {
    document.title = `you cliked me ${num} time`;
    console.log(document);
  }, [num]);

  return (
    <>
      <button style={{ width: "10%" }} onClick={() => setNum(num + 1)}>
        click me {num}
      </button>
    </>
  );
}

export default TitleChange;
