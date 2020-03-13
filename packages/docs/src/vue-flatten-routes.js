export default function flattenRoutes(
  routes,
  level = 0,
  parentName,
  hasNamedParent = false
) {
  if (Array.isArray(routes)) {
    return routes.reduce(
      (acc, { name, name: currParentName, path, children }) => {
        const root = level === 0
        const nested = !root
        acc.push({
          name,
          path,
          level,
          root,
          nested,
          hasNamedParent,
          parentName: root ? null : parentName
        })
        if (Array.isArray(children) && children.length) {
          const hasNamedParent = !!name
          acc = acc.concat(
            flattenRoutes(children, level + 1, currParentName, hasNamedParent)
          )
        }
        return acc
      },
      []
    )
  }
}
