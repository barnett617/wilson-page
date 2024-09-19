interface Props {
  name: string;
  noIndent?: boolean;
}

export default function Badge({ name, noIndent = false }: Props) {
  return (
    <sup>
      {noIndent ? <span>[{name}]</span> : <span>&nbsp;&nbsp;[{name}]</span>}
    </sup>
  );
}
