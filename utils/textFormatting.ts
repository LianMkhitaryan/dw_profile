export function toPascalCase(str: string): string {
	return str.replace(/(^|-)([a-z0-9])/g, (_, __, c) => c.toUpperCase())
}
