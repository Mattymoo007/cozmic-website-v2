export default function (htmlObj) {
  return htmlObj?.childMarkdownRemark?.html || `<p>No info available</p>`
}
