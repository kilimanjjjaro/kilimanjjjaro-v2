export const getGitHubImage = (projectSlug: string) => {
  const hash = crypto.randomUUID()

  const image = `https://opengraph.githubassets.com/${hash}/monospace/${projectSlug}`

  return image
}
