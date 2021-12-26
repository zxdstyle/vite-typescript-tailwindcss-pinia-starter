export function hexToRgba(hex, opacity) {
	if (hex && hex.length > 0) {
		return 'rgba(' + parseInt('0x' + hex.slice(1, 3)) + ',' + parseInt('0x' + hex.slice(3, 5)) + ',' + parseInt('0x' + hex.slice(5, 7)) + ',' + opacity + ')'
	}
	return ''
}
