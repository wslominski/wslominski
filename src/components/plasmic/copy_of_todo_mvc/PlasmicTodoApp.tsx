// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rtqeHxaDTf3jEdnrLWLsJW
// Component: Ul0jJY5KO2YV

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: Mdq4uBvyQSbL/component
import Task from "../../Task"; // plasmic-import: 1BdePqOzkHIJ/component
import Footer from "../../Footer"; // plasmic-import: imXAZtdZyMod/component

import { ThemeValue, useTheme } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: kzqGCbXk1j_o/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_copy_of_todo_mvc.module.css"; // plasmic-import: rtqeHxaDTf3jEdnrLWLsJW/projectcss
import sty from "./PlasmicTodoApp.module.css"; // plasmic-import: Ul0jJY5KO2YV/css

export type PlasmicTodoApp__VariantMembers = {
  state: "empty";
};
export type PlasmicTodoApp__VariantsArgs = {
  state?: SingleChoiceArg<"empty">;
};
type VariantPropType = keyof PlasmicTodoApp__VariantsArgs;
export const PlasmicTodoApp__VariantProps = new Array<VariantPropType>("state");

export type PlasmicTodoApp__ArgsType = {};
type ArgPropType = keyof PlasmicTodoApp__ArgsType;
export const PlasmicTodoApp__ArgProps = new Array<ArgPropType>();

export type PlasmicTodoApp__OverridesType = {
  root?: p.Flex<"div">;
  appTitle?: p.Flex<"div">;
  appBody?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  tasksContainer?: p.Flex<"div">;
  footer?: p.Flex<typeof Footer>;
  fakeStack?: p.Flex<"div">;
};

export interface DefaultTodoAppProps {
  state?: SingleChoiceArg<"empty">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicTodoApp__RenderFunc(props: {
  variants: PlasmicTodoApp__VariantsArgs;
  args: PlasmicTodoApp__ArgsType;
  overrides: PlasmicTodoApp__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "state",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.state
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries,
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    theme: useTheme()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootglobal_theme_dark]: hasVariant(
            globalVariants,
            "theme",
            "dark"
          ),
          [sty.rootstate_empty]: hasVariant($state, "state", "empty")
        }
      )}
    >
      <div
        data-plasmic-name={"appTitle"}
        data-plasmic-override={overrides.appTitle}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.appTitle,
          {
            [sty.appTitleglobal_theme_dark]: hasVariant(
              globalVariants,
              "theme",
              "dark"
            )
          }
        )}
      >
        {"todos"}
      </div>
      <div
        className={classNames(projectcss.all, sty.freeBox__ese24, {
          [sty.freeBoxglobal_theme_dark__ese24Obf95]: hasVariant(
            globalVariants,
            "theme",
            "dark"
          )
        })}
      >
        <div
          data-plasmic-name={"appBody"}
          data-plasmic-override={overrides.appBody}
          className={classNames(projectcss.all, sty.appBody, {
            [sty.appBodyglobal_theme_dark]: hasVariant(
              globalVariants,
              "theme",
              "dark"
            )
          })}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header, {
              [sty.headerglobal_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              ),
              [sty.headerstate_empty]: hasVariant($state, "state", "empty")
            })}
            state={
              hasVariant($state, "state", "empty")
                ? ("empty" as const)
                : undefined
            }
          />

          {(hasVariant($state, "state", "empty") ? false : true) ? (
            <div
              data-plasmic-name={"tasksContainer"}
              data-plasmic-override={overrides.tasksContainer}
              className={classNames(projectcss.all, sty.tasksContainer, {
                [sty.tasksContainerstate_empty]: hasVariant(
                  $state,
                  "state",
                  "empty"
                )
              })}
            >
              <Task
                className={classNames("__wab_instance", sty.task___5Nwtx, {
                  [sty.taskglobal_theme_dark___5NwtXobf95]: hasVariant(
                    globalVariants,
                    "theme",
                    "dark"
                  ),
                  [sty.taskstate_empty___5NwtxWlLi]: hasVariant(
                    $state,
                    "state",
                    "empty"
                  )
                })}
                label={"Some kind of text here"}
              />

              <Task
                className={classNames("__wab_instance", sty.task__v7T9D, {
                  [sty.taskglobal_theme_dark__v7T9Dobf95]: hasVariant(
                    globalVariants,
                    "theme",
                    "dark"
                  )
                })}
                label={"Some kind of text here"}
                state={"editing" as const}
              />

              <Task
                className={classNames("__wab_instance", sty.task__aWksv)}
                label={"Some kind of text here"}
                state={"checked" as const}
              />

              <Task
                className={classNames("__wab_instance", sty.task__a3TXm)}
                label={"I have a task to do something that takes a long time"}
              />
            </div>
          ) : null}
          {(hasVariant($state, "state", "empty") ? false : true) ? (
            <Footer
              data-plasmic-name={"footer"}
              data-plasmic-override={overrides.footer}
              className={classNames("__wab_instance", sty.footer, {
                [sty.footerstate_empty]: hasVariant($state, "state", "empty")
              })}
              count={"2"}
              state={["hasCompleted"]}
            />
          ) : null}
        </div>
        {(hasVariant($state, "state", "empty") ? false : true) ? (
          <div
            data-plasmic-name={"fakeStack"}
            data-plasmic-override={overrides.fakeStack}
            className={classNames(projectcss.all, sty.fakeStack, {
              [sty.fakeStackstate_empty]: hasVariant($state, "state", "empty")
            })}
          >
            <div
              className={classNames(projectcss.all, sty.freeBox__qiCff, {
                [sty.freeBoxglobal_theme_dark__qiCfFobf95]: hasVariant(
                  globalVariants,
                  "theme",
                  "dark"
                )
              })}
            />

            <div
              className={classNames(projectcss.all, sty.freeBox__qbEgf, {
                [sty.freeBoxglobal_theme_dark__qbEgfobf95]: hasVariant(
                  globalVariants,
                  "theme",
                  "dark"
                )
              })}
            />
          </div>
        ) : null}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "appTitle",
    "appBody",
    "header",
    "tasksContainer",
    "footer",
    "fakeStack"
  ],
  appTitle: ["appTitle"],
  appBody: ["appBody", "header", "tasksContainer", "footer"],
  header: ["header"],
  tasksContainer: ["tasksContainer"],
  footer: ["footer"],
  fakeStack: ["fakeStack"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  appTitle: "div";
  appBody: "div";
  header: typeof Header;
  tasksContainer: "div";
  footer: typeof Footer;
  fakeStack: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTodoApp__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTodoApp__VariantsArgs;
    args?: PlasmicTodoApp__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTodoApp__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTodoApp__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicTodoApp__ArgProps,
          internalVariantPropNames: PlasmicTodoApp__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTodoApp__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTodoApp";
  } else {
    func.displayName = `PlasmicTodoApp.${nodeName}`;
  }
  return func;
}

export const PlasmicTodoApp = Object.assign(
  // Top-level PlasmicTodoApp renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    appTitle: makeNodeComponent("appTitle"),
    appBody: makeNodeComponent("appBody"),
    header: makeNodeComponent("header"),
    tasksContainer: makeNodeComponent("tasksContainer"),
    footer: makeNodeComponent("footer"),
    fakeStack: makeNodeComponent("fakeStack"),

    // Metadata about props expected for PlasmicTodoApp
    internalVariantProps: PlasmicTodoApp__VariantProps,
    internalArgProps: PlasmicTodoApp__ArgProps
  }
);

export default PlasmicTodoApp;
/* prettier-ignore-end */
