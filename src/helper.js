export const emphasize = (text, color) => {
  return (
    <p> {text.split("**").map((word) => {
      if (word[0] === "/") {
        return (
          <p className={`inline font-semibold ${color}`}>
            {word.replace("/", "")}
          </p>
        );
      } return <p className="inline">{word}</p>;
    })}
    </p>
  )
}