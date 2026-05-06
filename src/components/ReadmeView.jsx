import MarkdownPreview from "@uiw/react-markdown-preview";

function ReadmeView({ id, readme }) {
  return (
    <div style={{ padding: "20px" }}>
      <MarkdownPreview id={id} source={readme} />
    </div>
  );
}

export default ReadmeView;