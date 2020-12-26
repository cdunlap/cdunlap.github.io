export default function (doc) {
  if (doc.isBroken) {
    return '/not-found'
  }
  if (doc.type === 'project_list') {
    return '/'
  }
  if (doc.type === 'home') {
    return '/resume'
  }
  if (doc.type === 'project') {
    return '/project/' + doc.uid
  }
  console.log(doc);
  return '/not-found'
}
