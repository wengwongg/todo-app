export default function Task({
  description = "Description for a task",
  tag = "tag",
  done = false,
}) {
  if (done) {
    return (
      <li>
        <p>
          <s>{description}</s>
        </p>
      </li>
    );
  } else {
    return (
      <li>
        <p>{description}</p>
        <p>{tag}</p>
        <button>✗</button>
        <button>✓</button>
      </li>
    );
  }
}
