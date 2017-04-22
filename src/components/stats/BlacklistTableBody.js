/*
 * @flow
 */

import type {ExtendedModule} from '../../types/Stats';

import Button from '../Bootstrap/Button';
import OffsetPageAnchor from '../OffsetPageAnchor';
import React, { Component } from 'react';
import Unit from '../Unit';

type Props = {
  removedModules: Array<ExtendedModule>,
};

type State = {
  isOpen: boolean
};

export default class BlacklistTableBody extends Component<void, Props, State> {
  state: State = {
    isOpen: false,
  };

  render() {
    if (this.state.isOpen) {
      return (
        <tbody>
          {this.renderHideRow()}
          {this.props.removedModules.map((eModule, i) =>
            <tr key={`blacklist-${i}`}>
              <td className="vert-align">
                <OffsetPageAnchor anchor={String(eModule.id)} />
                {eModule.name}
              </td>
              <td className="vert-align">
                <Unit bytes={eModule.size} />
              </td>
              <td colSpan="3"></td>
            </tr>
          )}
          {this.renderHideRow()}
        </tbody>
      );
    } else {
      return (
        <tbody>
          <tr>
            <td colSpan="5">
              <Button
                size="xs"
                onClick={() => this.setState({ isOpen: true })}>
                <span className="glyphicon glyphicon-triangle-right" aria-hidden="true"></span>
                Show {this.props.removedModules.length} more removed modules
              </Button>
            </td>
          </tr>
        </tbody>
      );
    }
  }

  renderHideRow() {
    return (
      <tr>
        <td colSpan="5">
          <Button
            size="xs"
            onClick={() => this.setState({ isOpen: false })}>
            <span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
            Hide extra modules
          </Button>
        </td>
      </tr>
    );
  }
}