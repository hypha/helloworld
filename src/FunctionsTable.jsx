import React from 'react';
import ReactDOM from 'react-dom';

export default class FunctionsTable extends React.Components {

    render() {
        var _self = this;

        var thead = React.DOM.thead({},
            React.DOM.tr({},
                this.props.cols.map(function (col) {
                    return React.DOM.th({}, col);
            })));

        var tbody = this.props.rows.map(function (row) {
            return React.DOM.tr({},
            _self.props.cols.map(function (col) {
                return React.DOM.td({}, row[col] || "");
            }));
        });

        return React.DOM.table({}, [thead, tbody]);
    }

}
