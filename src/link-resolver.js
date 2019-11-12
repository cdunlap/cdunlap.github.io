export default function (doc) {
  if (doc.isBroken) {
    return '/not-found'
  }
  if (doc.type === 'home') {
    return '/'
  }
  if (doc.type === 'project_list') {
    return '/projects'
  }
  if (doc.type === 'project') {
    return '/project/' + doc.slugs[0]
  }
  return '/not-found'
}
