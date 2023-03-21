export function useName(name) {
    let altName = name.replace(/-/g, ' ')
    altName = altName[0].toUpperCase() + altName.slice(1)

    return altName
}