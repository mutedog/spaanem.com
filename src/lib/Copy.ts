

export default async function copyText(text:string): Promise<void> {
	
	try {
		if(!navigator.clipboard) {
			throw new Error('Clipboard API not available');
		}
		if(text !== '') {
			await navigator.clipboard.writeText(text);
			console.log('Copied!', text);
		}
	} catch (error) {
		console.error('Failed to copy text to clipboard:', error);
		throw error;
	}
}