export default function (htmlObj) {
  return htmlObj?.childMarkdownRemark?.html || `<span>No info available</span>`
}
