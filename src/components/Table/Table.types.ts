export interface TableProps {
	heading1: string;
  heading2?: string;
  heading3?: string;

	// row 1
  data1?: string;
  data2?: string;
  data3?: string;

	// row 2
	data4?: string;
  data5?: string;
  data6?: string;

	//row 3
	data7?: string;
  data8?: string;
  data9?: string;

	// row 4 (footer)
  footer1?: string;
  footer2?: string;
  footer3?: string;

	headingBackgroundColor?: string;
	className?: string;
	id?: string;
	disabled?: boolean;
}
