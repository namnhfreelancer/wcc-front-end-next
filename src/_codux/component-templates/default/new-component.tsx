const styles = require("./new-component.module.sass");
import classNames from "classnames";

export interface NewComponentProps {
	className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-new-components-and-templates
 */
export const NewComponent = ({ className }: NewComponentProps) => {
	return (
		<div className={classNames(styles.root, className)}>NewComponent</div>
	);
};