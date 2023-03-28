const styles = require("./t-1.module.sass");
import classNames from "classnames";

export interface T1Props {
	className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-t-1s-and-templates
 */
export const T1 = ({ className }: T1Props) => {
	return (
		<div className={classNames(styles.root, className)}>T1</div>
	);
};
