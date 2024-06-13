export default function FilterTag() {
  return (
    <form className="filter_tag_form">
      <input
        type="text"
        id="tag_textbox"
        name="tag_textbox"
        placeholder="enter a tag..."
      ></input>
      <input type="submit" value="filter" />
    </form>
  );
}
