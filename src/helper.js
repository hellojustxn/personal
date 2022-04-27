// Style text wrapped with **/sample text** 
// semibold and colored
export const emphasize = (text, color) => {
  return (
    <div> {text.split("**").map((word, index) => {
      // console.log(word)
      if (word[0] === "/") {
        return (
          <p className={`inline font-semibold ${color}`} key={index}>
            {word.replace("/", "")}
          </p>
        );
      }
      else if (word[0] === "[" && word[word.length-1] === ")") {
        let regex = /\[(.*?)\]\((.*?)\)/; // [description](url)
        const description = word.match(regex)[1]
        const url = word.match(regex)[2]
        return (
          <a href={`${url}`} className={`inline border-b-2 py-1 leading-9 rounded-sm text-purple-500 ${color}`} key={index}>
            {description}
          </a>
        );
      } 
      return <p className="inline" key={index}>{word}</p>;
    })}
    </div>
  )
}