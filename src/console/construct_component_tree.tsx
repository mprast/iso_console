import * as _ from "lodash";
import * as React from "react";
import { IsoState, ComponentTree } from "src/redux/state_types";
import { traverse } from "src/util/std_functional";
import { Node } from "src/console/components/node";

export function constructComponentTree(state: IsoState["console"]): ComponentTree {
    const graphSize = state.rootGraph.size;
    return <g>
        {
            _.map(state.rootGraph.nodes, (node) => {
                return <Node
                        key={node.name}
                        name={node.name}
                        leftOffset={node.coords.x}
                        topOffset={node.coords.y}
                        graphWidth={graphSize[0]}
                        graphHeight={graphSize[1]}/>;
            })
        }
        </g>;
}
