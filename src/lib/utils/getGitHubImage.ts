export const getGitHubImage = (projectSlug: string) => {
  const hash = crypto.randomUUID()

  const image = `https://opengraph.githubassets.com/${hash}/kilimanjjjaro/${projectSlug}`

  return image
}
