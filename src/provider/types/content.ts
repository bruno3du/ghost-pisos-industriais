export interface TextNode {
  text: string;
  type?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
}

export interface ParagraphNode {
  type: string;
  children: TextNode[];
}

export interface ContentBlock {
  content: ParagraphNode[];
}

export interface SerializableNode {
  type?: string;
  children?: SerializableNode[];
  text?: string;
  url?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
}