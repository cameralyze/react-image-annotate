import React, { useEffect } from "react";
import { styled } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import * as muiColors from "@material-ui/core/colors";
import SidebarBoxContainer from "../SidebarBoxContainer";
import colors from "../colors";
import BallotIcon from "@material-ui/icons/Ballot";
import capitalize from "lodash/capitalize";
import classnames from "classnames";
var LabelContainer = styled("div")({
  display: "flex",
  paddingTop: 4,
  paddingBottom: 4,
  paddingLeft: 16,
  paddingRight: 16,
  alignItems: "center",
  cursor: "pointer",
  opacity: 0.7,
  backgroundColor: "#fff",
  "&:hover": {
    opacity: 1
  },
  "&.selected": {
    opacity: 1,
    fontWeight: "bold"
  }
});
var Circle = styled("div")({
  width: 12,
  height: 12,
  borderRadius: 12,
  marginRight: 8
});
var Label = styled("div")({
  fontSize: 11
});
var DashSep = styled("div")({
  flexGrow: 1,
  borderBottom: "2px dotted ".concat(muiColors.grey[300]),
  marginLeft: 8,
  marginRight: 8
});
var Number = styled("div")({
  fontSize: 11,
  textAlign: "center",
  minWidth: 14,
  paddingTop: 2,
  paddingBottom: 2,
  fontWeight: "bold",
  color: muiColors.grey[700]
});
export var ClassSelectionMenu = function ClassSelectionMenu(_ref) {
  var selectedCls = _ref.selectedCls,
      regionClsList = _ref.regionClsList,
      onSelectCls = _ref.onSelectCls;
  return React.createElement(SidebarBoxContainer, {
    title: "Classifications",
    subTitle: "",
    icon: React.createElement(BallotIcon, {
      style: {
        color: muiColors.grey[700]
      }
    }),
    expandedByDefault: true
  }, regionClsList.map(function (label, index) {
    return React.createElement(LabelContainer, {
      className: classnames({
        selected: label === selectedCls
      }),
      onClick: function onClick() {
        return onSelectCls(label);
      }
    }, React.createElement(Circle, {
      style: {
        backgroundColor: colors[index % colors.length]
      }
    }), React.createElement(Label, {
      className: classnames({
        selected: label === selectedCls
      })
    }, capitalize(label)), React.createElement(DashSep, null));
  }), React.createElement(Box, {
    pb: 2
  }));
};
export default ClassSelectionMenu;