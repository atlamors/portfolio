// Section structure scss
import sections from "../../styles/structure/section.module.scss";

/**
 * Structural Component
 *
 * Section / Container / Componenents / Blocks / Utils
 * ¯¯¯¯¯¯¯¯
 * @param {string}	classProp template literals of classes for contain
 * @param {jsx} 	children children elements
 * @returns {jsx}	<Section />
 */
export default function Section({ classProp, children, IdName }) {
  const _class = classProp ? classProp : "";
  const _Id = IdName ? IdName : "";

//   console.log(_Id);
//   console.log(classProp);

  return (
    <div className={`${sections.default} ${_class}`} id={_Id}>
      {children}
    </div>
  );
}
