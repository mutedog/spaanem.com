
interface RichTextNode {
	type?: string;
	text?: string;
	children?: RichTextNode[];
}


export default function extractPlainTextFromRichText(richText: RichTextNode | RichTextNode[]): string {
	if (Array.isArray(richText)) {
		return richText.map(node => extractPlainTextFromRichText(node)).join(' ');
	}

	if(typeof richText === 'object' && richText !== null) {
		if (richText.text) {
			return richText.text;
		}
		if(richText.children) {
			return extractPlainTextFromRichText(richText.children);
		}
	}

	return '';
}
