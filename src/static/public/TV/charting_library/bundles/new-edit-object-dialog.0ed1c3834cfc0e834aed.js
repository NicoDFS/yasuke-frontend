(window.webpackJsonp = window.webpackJsonp || []).push([
  ["new-edit-object-dialog"],
  {
    "/YRR": function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 16.5l5-5a1.414 1.414 0 0 1 2 0m11-1l-5 5a1.414 1.414 0 0 1-2 0"/><path fill="currentColor" d="M14 5h1v2h-1zM14 10h1v2h-1zM14 15h1v2h-1zM14 20h1v2h-1z"/></svg>';
    },
    "01Ho": function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M14.354 6.646L14 6.293l-.354.353-7 7-.353.354.353.354 7 7 .354.353.354-.353 7-7 .353-.354-.353-.354-7-7z"/></svg>';
    },
    "1yQO": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var l = n("hY0g"),
        a = n.n(l);
      function r(e, t, n, l = null) {
        const r = { id: t, title: n, definitions: new a.a(e) };
        return null !== l && (r.icon = l), r;
      }
    },
    "4Njr": function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M14 21l7.424-6.114a.5.5 0 0 0-.318-.886H18.5V7h-9v7H6.894a.5.5 0 0 0-.318.886L14 21z"/></svg>';
    },
    "4ZyK": function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M8.5 22v-5.5m0 0v-8L12 7l4 2.5 3.5-1v8l-3.5 1-4-2.5-3.5 1.5z"/></svg>';
    },
    "4pMH": function (e, t, n) {},
    "5ijr": function (e) {
      e.exports = JSON.parse(
        '{"switcherWrapper":"switcherWrapper-1wFH-_jm","size-small":"size-small-1gT-kZYO","size-large":"size-large-MOSirnj_","intent-select":"intent-select-2kut8F29","switcherThumbWrapper":"switcherThumbWrapper-2u191lDO","input":"input-J7QIcTTo","switcherTrack":"switcherTrack-2XruDVTa","intent-default":"intent-default-3soo5rvS","switcherThumb":"switcherThumb-2yuEucci","focus":"focus-uZMRkCO0"}'
      );
    },
    "9FXF": function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M6.5 12.5v8h3v-8h-3zM12.5 7.5v13h3v-13h-3zM18.5 15.5v5h3v-5h-3z"/></svg>';
    },
    D2im: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path stroke="currentColor" d="M17 8.5h7M20.5 12V5M10 19.5h7M13.5 23v-7M3 12.5h7M6.5 16V9"/></svg>';
    },
    Dj0x: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M11 18.5h-.5V8.793l.146-.147 3-3L14 5.293l.354.353 3 3 .146.147V18.5H11z"/></svg>';
    },
    KKsp: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var l = n("q1tI"),
        a = n("TSYQ"),
        r = n.n(a),
        s = n("NOPy");
      function i(e) {
        const { size: t = "normal", className: n } = e;
        return l.createElement("div", {
          className: r()(
            s.separator,
            "small" === t && s.small,
            "normal" === t && s.normal,
            "large" === t && s.large,
            n
          ),
        });
      }
    },
    Ly1u: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M7.5 7.5h13v13h-13z"/></svg>';
    },
    MB0Y: function (e, t, n) {
      "use strict";
      var l = n("q1tI"),
        a = n.n(l),
        r = n("TSYQ"),
        s = n.n(r),
        i = n("5ijr");
      n("4pMH");
      function o(e) {
        const {
          className: t = "",
          intent: n = "default",
          size: l = "small",
          disabled: a,
        } = e;
        return r(t, i.switcherWrapper, i["size-" + l], !a && i["intent-" + n]);
      }
      class c extends l.PureComponent {
        render() {
          const { reference: e, size: t, intent: n, ...a } = this.props,
            s = r(i.input, -1 !== this.props.tabIndex && i.focus);
          return l.createElement(
            "div",
            { className: o(this.props) },
            l.createElement("input", {
              ...a,
              type: "checkbox",
              className: s,
              ref: e,
            }),
            l.createElement(
              "div",
              { className: i.switcherThumbWrapper },
              l.createElement("div", { className: i.switcherTrack }),
              l.createElement("div", { className: i.switcherThumb })
            )
          );
        }
      }
      var p = n("ijHL"),
        d = n("OP2o");
      n.d(t, "a", function () {
        return h;
      }),
        n.d(t, "b", function () {
          return u;
        });
      const h = d;
      function u(e) {
        const {
            className: t,
            checked: n,
            id: l,
            label: r,
            labelDescription: i,
            value: o,
            preventLabelHighlight: h,
            reference: u,
            switchReference: m,
            theme: b = d,
            disabled: w,
          } = e,
          g = s()(b.label, n && !h && b.labelOn),
          v = s()(t, b.wrapper, n && b.wrapperWithOnLabel);
        return a.a.createElement(
          "label",
          { className: v, htmlFor: l, ref: u },
          a.a.createElement(
            "div",
            { className: b.labelRow },
            a.a.createElement("div", { className: g }, r),
            i && a.a.createElement("div", { className: b.labelHint }, i)
          ),
          a.a.createElement(c, {
            disabled: w,
            className: b.switch,
            reference: m,
            checked: n,
            onChange: function (t) {
              const n = t.target.checked;
              void 0 !== e.onChange && e.onChange(n);
            },
            value: o,
            tabIndex: -1,
            id: l,
            ...Object(p.b)(e),
          })
        );
      }
    },
    NOPy: function (e, t, n) {
      e.exports = {
        separator: "separator-eqcGT_ow",
        small: "small-eqcGT_ow",
        normal: "normal-eqcGT_ow",
        large: "large-eqcGT_ow",
      };
    },
    OP2o: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper-1Eudat6L",
        hovered: "hovered-1Eudat6L",
        labelRow: "labelRow-1Eudat6L",
        label: "label-1Eudat6L",
        labelHint: "labelHint-1Eudat6L",
        labelOn: "labelOn-1Eudat6L",
      };
    },
    V1YL: function (e, t, n) {
      e.exports = {
        recalculateCheckbox: "recalculateCheckbox-2z5ytJSA",
        descriptionCell: "descriptionCell-2z5ytJSA",
      };
    },
    W7Dn: function (e, t, n) {
      e.exports = { scrollable: "scrollable-2CTvqFKf" };
    },
    Y5hB: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("YFKU"),
        a = n("i8i4"),
        r = n("q1tI"),
        s = n.n(r),
        i = n("Eyy1"),
        o = (n("bSeV"), n("CLNU")),
        c = n("Vdly"),
        p = n("Kxc7"),
        d = n("FQhm"),
        h = n("JWMC"),
        u = n("aDg1"),
        m = n("vHME"),
        b = n("ycFu"),
        w = n("tWVy"),
        g = n("tmL0"),
        v = n("3ClC"),
        y = n("LWBq"),
        C = n("CW80"),
        f = n("pLAj"),
        E = n("W7Dn");
      class S extends r.PureComponent {
        constructor(e) {
          super(e),
            (this._renderFooterLeft = (e) => {
              const { source: t, model: n } = this.props;
              if (Object(C.isLineTool)(t))
                return r.createElement(f.a, { source: t, model: n });
              if (Object(v.isStudy)(t))
                return r.createElement(m.a, {
                  model: n,
                  source: t,
                  mode: e ? "compact" : "normal",
                });
              throw new TypeError("Unsupported source type.");
            }),
            (this._handleSelect = (e) => {
              this.setState({ activeTabId: e }, () => {
                this._requestResize && this._requestResize();
              }),
                this.props.onActiveTabChanged &&
                  this.props.onActiveTabChanged(e);
            }),
            (this._handleScroll = () => {
              w.a.fire();
            }),
            (this._handleSubmit = () => {
              this.props.onSubmit(), this.props.onClose();
            });
          const { pages: t, initialActiveTab: n } = this.props;
          this.state = { activeTabId: t.allIds.includes(n) ? n : t.allIds[0] };
        }
        render() {
          const { title: e, onCancel: t, onClose: n } = this.props,
            { activeTabId: l } = this.state;
          return r.createElement(b.a, {
            dataName: "indicator-properties-dialog",
            title: e,
            isOpened: !0,
            onSubmit: this._handleSubmit,
            onCancel: t,
            onClickOutside: n,
            onClose: n,
            footerLeftRenderer: this._renderFooterLeft,
            render: this._renderChildren(l),
            submitOnEnterKey: !1,
          });
        }
        _renderChildren(e) {
          return ({ requestResize: t }) => {
            this._requestResize = t;
            const { pages: n, source: l, model: a } = this.props,
              s = n.byId[e],
              i = "Component" in s ? void 0 : s.page;
            return r.createElement(
              r.Fragment,
              null,
              r.createElement(u.a, {
                activeTabId: e,
                onSelect: this._handleSelect,
                tabs: n,
              }),
              r.createElement(
                g.a,
                { className: E.scrollable, onScroll: this._handleScroll },
                "Component" in s
                  ? r.createElement(s.Component, { source: l, model: a })
                  : r.createElement(y.a, { page: i, tableKey: e })
              )
            );
          };
        }
      }
      var P = n("PjdP"),
        _ = n("HfwS"),
        x = n("HGyE");
      class O extends r.PureComponent {
        render() {
          const {
              input: e,
              value: t,
              onChange: n,
              onBlur: l,
              onKeyDown: a,
            } = this.props,
            s = e.options.reduce(
              (e, t) => ((e[t] = "NONE" === t ? window.t("Default") : t), e),
              {}
            ),
            i = { ...e, optionsTitles: s };
          return r.createElement(x.b, {
            input: i,
            value: t,
            onChange: n,
            onBlur: l,
            onKeyDown: a,
          });
        }
      }
      const k = Object(_.a)(O);
      var j = n("h5Dg"),
        T = n("rJEJ"),
        L = n("XDrA"),
        N = n("+8gn"),
        V = n("Q+1u");
      n("HbRj");
      const I = r.createContext(null),
        M = window.t("{currency} per order"),
        R = window.t("{currency} per contract");
      class B extends r.PureComponent {
        render() {
          const { input: e } = this.props,
            t = Object(i.ensureNotNull)(this.context),
            n = {
              ...e,
              optionsTitles: {
                percent: "%",
                cash_per_order: M.format({ currency: t }),
                cash_per_contract: R.format({ currency: t }),
              },
            };
          return r.createElement(x.a, { input: n });
        }
      }
      B.contextType = I;
      const D = window.t("Contracts"),
        F = window.t("% of equity");
      class z extends r.PureComponent {
        render() {
          const { input: e } = this.props,
            t = Object(i.ensureNotNull)(this.context),
            n = {
              ...e,
              optionsTitles: {
                fixed: D,
                cash_per_order: t,
                percent_of_equity: F,
              },
            };
          return r.createElement(x.a, { input: n });
        }
      }
      z.contextType = I;
      var H = n("+GxX"),
        W = n("V1YL");
      class G extends r.PureComponent {
        render() {
          const { inputs: e } = this.props;
          return r.createElement(
            V.a,
            null,
            r.createElement(
              T.a,
              { label: window.t("Initial capital") },
              r.createElement(P.a, { input: e.initial_capital })
            ),
            r.createElement(
              T.a,
              { label: window.t("Base currency") },
              r.createElement(k, { input: e.currency })
            ),
            r.createElement(
              T.a,
              { label: window.t("Order size"), labelAlign: "adaptive" },
              r.createElement(
                L.a,
                null,
                r.createElement(P.a, { input: e.default_qty_value }),
                r.createElement(z, { input: e.default_qty_type })
              )
            ),
            r.createElement(
              T.a,
              { label: window.t("Pyramiding") },
              r.createElement(
                "span",
                null,
                r.createElement(P.a, { input: e.pyramiding })
              ),
              r.createElement(
                "span",
                { className: W.descriptionCell },
                window.t("orders", { context: "Pyramiding: count orders" })
              )
            ),
            r.createElement(V.a.Separator, null),
            r.createElement(
              T.a,
              { label: window.t("Commission"), labelAlign: "adaptive" },
              r.createElement(
                L.a,
                null,
                r.createElement(P.a, { input: e.commission_value }),
                r.createElement(B, { input: e.commission_type })
              )
            ),
            r.createElement(
              T.a,
              { label: window.t("Verify Price for Limit Orders") },
              r.createElement(
                "span",
                null,
                r.createElement(P.a, {
                  input: e.backtest_fill_limits_assumption,
                })
              ),
              r.createElement(
                "span",
                { className: W.descriptionCell },
                window.t("ticks", { context: "slippage ... ticks" })
              )
            ),
            r.createElement(
              T.a,
              { label: window.t("Slippage") },
              r.createElement(
                "span",
                null,
                r.createElement(P.a, { input: e.slippage })
              ),
              r.createElement(
                "span",
                { className: W.descriptionCell },
                window.t("ticks", { context: "slippage ... ticks" })
              )
            ),
            r.createElement(V.a.Separator, null),
            Object(H.isFeatureEnabled)("show_strategy_margin_inputs") &&
              e.margin_long &&
              e.margin_short &&
              r.createElement(
                r.Fragment,
                null,
                r.createElement(
                  T.a,
                  { label: window.t("Margin For Long Positions") },
                  r.createElement(
                    "span",
                    null,
                    r.createElement(P.a, { input: e.margin_long })
                  ),
                  r.createElement("span", { className: W.descriptionCell }, "%")
                ),
                r.createElement(
                  T.a,
                  { label: window.t("Margin For Short Positions") },
                  r.createElement(
                    "span",
                    null,
                    r.createElement(P.a, { input: e.margin_short })
                  ),
                  r.createElement("span", { className: W.descriptionCell }, "%")
                ),
                r.createElement(V.a.Separator, null)
              ),
            r.createElement(
              T.a,
              { label: window.t("Recalculate"), labelAlign: "top" },
              r.createElement(
                "div",
                null,
                r.createElement(
                  "div",
                  { className: W.recalculateCheckbox },
                  r.createElement(j.a, {
                    label: window.t("After Order is Filled"),
                    input: e.calc_on_order_fills,
                  })
                ),
                r.createElement(
                  "div",
                  { className: W.recalculateCheckbox },
                  r.createElement(j.a, {
                    label: window.t("On Every Tick"),
                    input: e.calc_on_every_tick,
                  })
                )
              )
            )
          );
        }
      }
      function A(e) {
        const { property: t, model: n, inputs: l, study: a } = e;
        return r.createElement(
          N.a,
          { property: t.inputs, model: n, study: a },
          r.createElement(G, { inputs: l })
        );
      }
      G.contextType = N.b;
      var U = n("z61+"),
        q = n("txPx");
      const $ = Object(q.getLogger)(
        "Platform.GUI.PropertyDialog.Indicators.StrategyPage"
      );
      class K extends r.PureComponent {
        constructor(e) {
          super(e),
            (this._handleWatchedDataChange = () => {
              this.setState({ currency: this._getCurrency() });
            });
          const { source: t } = this.props;
          if (((this._source = t), !Object(v.isStudy)(this._source)))
            throw new TypeError("Strategy page works only for study.");
          this._properties = t.properties();
          const n = t.metaInfo(),
            l = new U.a(n);
          (this._inputs = l.getStrategyProperties()),
            (this.state = { currency: this._getCurrency() });
        }
        componentDidMount() {
          this._source.watchedData.subscribe(this._handleWatchedDataChange);
        }
        componentWillUnmount() {
          this._source.watchedData.unsubscribe(this._handleWatchedDataChange);
        }
        render() {
          return r.createElement(
            I.Provider,
            { value: this.state.currency },
            r.createElement(A, {
              inputs: this._inputs,
              property: this._properties,
              model: this.props.model,
              study: this.props.source,
            })
          );
        }
        _getCurrency() {
          const e = this._source,
            t = e.reportData();
          if (null === t || void 0 === t.currency) {
            (void 0 !== this.state && null === this.state.currency) ||
              $.logWarn("Can't obtain currency from strategy report");
            const t = e
                .metaInfo()
                .inputs.find((e) => "currency" === e.internalID),
              n = null == t ? void 0 : t.defval;
            if (n && "NONE" !== n) return n.toString();
            const l = this.props.model.mainSeries().symbolInfo();
            return (
              (null == l ? void 0 : l.original_currency_code) ||
              (null == l ? void 0 : l.currency_code) ||
              null
            );
          }
          return t.currency;
        }
      }
      var Y = n("5Ssy");
      class Q extends r.PureComponent {
        constructor(e) {
          super(e),
            (this._properties = this.props.source.properties()),
            (this._inputs = new U.a(
              this.props.source.metaInfo()
            ).getUserEditableInputs());
        }
        render() {
          return r.createElement(Y.a, {
            property: this._properties,
            model: this.props.model,
            study: this.props.source,
            inputs: this._inputs,
          });
        }
      }
      var J = n("RMU6"),
        X = n("23IT"),
        Z = n("0YCj"),
        ee = n.n(Z),
        te = n("Z1Tk"),
        ne = n("S0KV");
      const le = window.t("Change Visibility");
      class ae extends r.PureComponent {
        constructor() {
          super(...arguments),
            (this._onChange = (e) => {
              const { setValue: t } = this.context,
                { visible: n } = this.props;
              n && Object(ne.b)(n, (n) => t(n, e, le));
            });
        }
        render() {
          const { id: e, title: t, visible: n, disabled: l } = this.props,
            a = Object(o.clean)(window.t(t, { context: "input" }), !0);
          return r.createElement(j.b, {
            label: a,
            disabled: l,
            input: { id: e, type: "bool", defval: !0, name: "visible" },
            value: !n || Object(ne.a)(n),
            onChange: this._onChange,
          });
        }
      }
      ae.contextType = te.b;
      var re = n("KKsp"),
        se = n("MB0Y"),
        ie = n("CHgb"),
        oe = n("xHjM"),
        ce = n("/YRR"),
        pe = n("rlj/"),
        de = n("kBAl"),
        he = n("ZtdB"),
        ue = n("D2im"),
        me = n("tH7p"),
        be = n("tQCG"),
        we = n("9FXF"),
        ge = n("sPU+");
      const ve = {
          [X.LineStudyPlotStyle.Line]: {
            type: X.LineStudyPlotStyle.Line,
            order: 0,
            icon: oe,
            label: window.t("Line"),
          },
          [X.LineStudyPlotStyle.LineWithBreaks]: {
            type: X.LineStudyPlotStyle.LineWithBreaks,
            order: 1,
            icon: ce,
            label: window.t("Line With Breaks"),
          },
          [X.LineStudyPlotStyle.StepLine]: {
            type: X.LineStudyPlotStyle.StepLine,
            order: 2,
            icon: pe,
            label: window.t("Step Line"),
          },
          [X.LineStudyPlotStyle.StepLineWithDiamonds]: {
            type: X.LineStudyPlotStyle.StepLineWithDiamonds,
            order: 3,
            icon: de,
            label: window.t("Step Line With Diamonds"),
          },
          [X.LineStudyPlotStyle.Histogram]: {
            type: X.LineStudyPlotStyle.Histogram,
            order: 4,
            icon: he,
            label: window.t("Histogram"),
          },
          [X.LineStudyPlotStyle.Cross]: {
            type: X.LineStudyPlotStyle.Cross,
            order: 5,
            icon: ue,
            label: window.t("Cross", { context: "chart_type" }),
          },
          [X.LineStudyPlotStyle.Area]: {
            type: X.LineStudyPlotStyle.Area,
            order: 6,
            icon: me,
            label: window.t("Area"),
          },
          [X.LineStudyPlotStyle.AreaWithBreaks]: {
            type: X.LineStudyPlotStyle.AreaWithBreaks,
            order: 7,
            icon: be,
            label: window.t("Area With Breaks"),
          },
          [X.LineStudyPlotStyle.Columns]: {
            type: X.LineStudyPlotStyle.Columns,
            order: 8,
            icon: we,
            label: window.t("Columns"),
          },
          [X.LineStudyPlotStyle.Circles]: {
            type: X.LineStudyPlotStyle.Circles,
            order: 9,
            icon: ge,
            label: window.t("Circles"),
          },
        },
        ye = Object.values(ve)
          .sort((e, t) => e.order - t.order)
          .map((e) => ({
            value: e.type,
            selectedContent: s.a.createElement(ie.a, { icon: e.icon }),
            content: s.a.createElement(ie.b, { icon: e.icon, label: e.label }),
          })),
        Ce = window.t("Price Line");
      class fe extends s.a.PureComponent {
        render() {
          const {
            id: e,
            plotType: t,
            className: n,
            priceLine: l,
            plotTypeChange: a,
            priceLineChange: r,
            disabled: i,
          } = this.props;
          if (!(t in ve)) return null;
          const o = {
            readonly: !0,
            content: s.a.createElement(
              s.a.Fragment,
              null,
              s.a.createElement(se.b, {
                id: "PlotTypePriceLineSwitch",
                checked: l,
                label: Ce,
                preventLabelHighlight: !0,
                value: "priceLineSwitcher",
                onChange: r,
              }),
              s.a.createElement(re.a, null)
            ),
          };
          return s.a.createElement(ie.c, {
            id: e,
            disabled: i,
            className: n,
            hideArrowButton: !0,
            items: [o, ...ye],
            value: t,
            onChange: a,
          });
        }
      }
      var Ee = n("lkVX"),
        Se = n("wwEg");
      const Pe = window.t("Change Plot Type"),
        _e = window.t("Change Price Line");
      class xe extends r.PureComponent {
        constructor() {
          super(...arguments),
            (this._onPlotTypeChange = (e) => {
              const { setValue: t } = this.context,
                {
                  styleProp: { plottype: n },
                } = this.props;
              n && t(n, e, Pe);
            }),
            (this._onPriceLineChange = (e) => {
              const { setValue: t } = this.context,
                {
                  styleProp: { trackPrice: n },
                } = this.props;
              n && t(n, e, _e);
            });
        }
        render() {
          const {
              id: e,
              paletteColor: t,
              paletteColorProps: n,
              styleProp: l,
              isLine: a,
              hasPlotTypeSelect: s,
              grouped: i,
              offset: o,
            } = this.props,
            c = n.childs();
          return r.createElement(
            T.a,
            {
              grouped: i,
              label: r.createElement(
                "div",
                {
                  className: Se.childRowContainer,
                },
                window.t(t.name, { context: "input" })
              ),
              offset: o,
            },
            r.createElement(Ee.a, {
              disabled: !l.visible.value(),
              color: c.color,
              transparency: l.transparency,
              thickness: a ? c.width : void 0,
              isPaletteColor: !0,
            }),
            a && s && l.plottype && l.trackPrice
              ? r.createElement(fe, {
                  id: Object(J.a)(e, "plot-type-select"),
                  disabled: !l.visible.value(),
                  className: Se.smallStyleControl,
                  plotType: l.plottype.value(),
                  priceLine: l.trackPrice.value(),
                  plotTypeChange: this._onPlotTypeChange,
                  priceLineChange: this._onPriceLineChange,
                })
              : null
          );
        }
      }
      xe.contextType = te.b;
      class Oe extends r.PureComponent {
        render() {
          const {
              plot: e,
              area: t,
              palette: n,
              paletteProps: l,
              hideVisibilitySwitch: a,
              styleProp: s,
              showOnlyTitle: o,
              showSeparator: c = !0,
              offset: p,
            } = this.props,
            d = e ? e.id : Object(i.ensureDefined)(t).id,
            h = !d.startsWith("fill") && e && Object(X.isLinePlot)(e);
          return r.createElement(
            r.Fragment,
            null,
            !a &&
              r.createElement(
                V.a.Row,
                null,
                r.createElement(
                  V.a.Cell,
                  { placement: "first", colSpan: 2, offset: p },
                  o
                    ? r.createElement(
                        "div",
                        null,
                        t ? t.title : s.title.value()
                      )
                    : r.createElement(ae, {
                        id: d,
                        title: t ? t.title : s.title.value(),
                        visible: s.visible,
                      })
                )
              ),
            (function (e, t, n, l, a, s) {
              const o = t.colors,
                c = n.colors;
              return Object.keys(o).map((t, n) =>
                r.createElement(xe, {
                  key: t,
                  id: e,
                  grouped: !0,
                  paletteColor: Object(i.ensureDefined)(o[t]),
                  paletteColorProps: Object(i.ensureDefined)(c[t]),
                  styleProp: l,
                  isLine: a,
                  hasPlotTypeSelect: 0 === n,
                  offset: s,
                })
              );
            })(d, n, l, s, h, p),
            c && r.createElement(V.a.GroupSeparator, null)
          );
        }
      }
      Oe.contextType = te.b;
      var ke = n("3lVo");
      const je = window.t("Change Plot Type"),
        Te = window.t("Change Price Line");
      class Le extends r.PureComponent {
        constructor() {
          super(...arguments),
            (this._onPlotTypeChange = (e) => {
              const { setValue: t } = this.context,
                {
                  property: { plottype: n },
                } = this.props;
              n && t(n, e, je);
            }),
            (this._onPriceLineChange = (e) => {
              const { setValue: t } = this.context,
                {
                  property: { trackPrice: n },
                } = this.props;
              n && t(n, e, Te);
            });
        }
        render() {
          const {
            id: e,
            isRGB: t,
            property: {
              title: n,
              color: l,
              plottype: a,
              linewidth: s,
              transparency: i,
              trackPrice: o,
              visible: c,
            },
          } = this.props;
          return r.createElement(
            T.a,
            {
              label: r.createElement(ae, {
                id: e,
                title: n.value(),
                visible: c,
              }),
            },
            t
              ? this._getInputForRgb()
              : r.createElement(Ee.a, {
                  disabled: !c.value(),
                  color: l,
                  transparency: i,
                  thickness: s,
                }),
            r.createElement(fe, {
              id: Object(J.a)(e, "plot-type-select"),
              disabled: !c.value(),
              className: Se.smallStyleControl,
              plotType: a.value(),
              priceLine: o.value(),
              plotTypeChange: this._onPlotTypeChange,
              priceLineChange: this._onPriceLineChange,
            })
          );
        }
        _getInputForRgb() {
          const { id: e, showLineWidth: t, property: n } = this.props,
            { linewidth: l, visible: a } = n;
          return l && t
            ? r.createElement(ke.a, {
                id: Object(J.a)(e, "line-width-select"),
                property: l,
                disabled: !a.value(),
              })
            : null;
        }
      }
      Le.contextType = te.b;
      const Ne = r.createContext(null);
      class Ve extends r.PureComponent {
        render() {
          const {
            id: e,
            isRGB: t,
            title: n,
            visible: l,
            color: a,
            transparency: s,
            thickness: i,
            children: o,
            switchable: c = !0,
            offset: p,
            grouped: d,
          } = this.props;
          return r.createElement(
            T.a,
            {
              label: c
                ? r.createElement(ae, { id: e, title: n, visible: l })
                : n,
              offset: p,
              grouped: d,
            },
            t
              ? null
              : r.createElement(Ee.a, {
                  disabled: l && !(Array.isArray(l) ? l[0].value() : l.value()),
                  color: a,
                  transparency: s,
                  thickness: i,
                }),
            o
          );
        }
      }
      Ve.contextType = te.b;
      class Ie extends r.PureComponent {
        render() {
          const {
            id: e,
            isRGB: t,
            property: { colorup: n, colordown: l, transparency: a, visible: s },
          } = this.props;
          return r.createElement(Ne.Consumer, null, (o) =>
            r.createElement(
              r.Fragment,
              null,
              r.createElement(
                V.a.Row,
                null,
                r.createElement(
                  V.a.Cell,
                  { placement: "first", colSpan: 2, grouped: !0 },
                  r.createElement(ae, {
                    id: e,
                    title: pt(Object(i.ensureNotNull)(o), e),
                    visible: s,
                  })
                )
              ),
              !t &&
                r.createElement(
                  r.Fragment,
                  null,
                  r.createElement(Ve, {
                    id: e,
                    title: at,
                    color: n,
                    transparency: a,
                    visible: s,
                    switchable: !1,
                    offset: !0,
                    grouped: !0,
                  }),
                  r.createElement(Ve, {
                    id: e,
                    title: rt,
                    color: l,
                    transparency: a,
                    visible: s,
                    switchable: !1,
                    offset: !0,
                    grouped: !0,
                  })
                ),
              r.createElement(V.a.GroupSeparator, null)
            )
          );
        }
      }
      Ie.contextType = te.b;
      var Me = n("/SnT"),
        Re = n.n(Me),
        Be = n("TSYQ"),
        De = n.n(Be),
        Fe = n("wHCJ"),
        ze = n("PECq"),
        He = n("972a");
      const We = {
          [He.c.AboveBar]: {
            value: He.c.AboveBar,
            content: window.t("Above Bar"),
            order: 0,
          },
          [He.c.BelowBar]: {
            value: He.c.BelowBar,
            content: window.t("Below Bar"),
            order: 1,
          },
          [He.c.Top]: { value: He.c.Top, content: window.t("Top"), order: 2 },
          [He.c.Bottom]: {
            value: He.c.Bottom,
            content: window.t("Bottom"),
            order: 3,
          },
          [He.c.Absolute]: {
            value: He.c.Absolute,
            content: window.t("Absolute"),
            order: 4,
          },
        },
        Ge = Object.values(We).sort((e, t) => e.order - t.order);
      class Ae extends r.PureComponent {
        render() {
          const {
            id: e,
            shapeLocation: t,
            className: n,
            menuItemClassName: l,
            shapeLocationChange: a,
            disabled: s,
          } = this.props;
          return r.createElement(ze.a, {
            id: e,
            disabled: s,
            className: n,
            menuItemClassName: l,
            items: Ge,
            value: t,
            onChange: a,
          });
        }
      }
      const Ue = window.t("Change Char"),
        qe = window.t("Change Location");
      class $e extends r.PureComponent {
        constructor() {
          super(...arguments),
            (this._onCharChange = (e) => {
              const { setValue: t } = this.context,
                n = e.currentTarget.value.trim(),
                l = Re()(n),
                a = 0 === l.length ? "" : l[l.length - 1],
                {
                  property: { char: r },
                } = this.props;
              t(r, a, Ue);
            }),
            (this._onLocationChange = (e) => {
              const { setValue: t } = this.context,
                {
                  property: { location: n },
                } = this.props;
              t(n, e, qe);
            });
        }
        render() {
          const {
            id: e,
            isRGB: t,
            property: {
              title: n,
              color: l,
              transparency: a,
              char: s,
              location: i,
              visible: o,
            },
            hasPalette: c,
          } = this.props;
          return r.createElement(
            T.a,
            {
              grouped: c,
              label: r.createElement(ae, {
                id: e,
                title: n.value(),
                visible: o,
              }),
            },
            !c &&
              !t &&
              r.createElement(Ee.a, {
                disabled: !o.value(),
                color: l,
                transparency: a,
              }),
            r.createElement(Fe.a, {
              disabled: !o.value(),
              className: Se.smallStyleControl,
              value: s.value(),
              onChange: this._onCharChange,
            }),
            r.createElement(Ae, {
              id: Object(J.a)(e, "shape-style-select"),
              disabled: !o.value(),
              className: Be(Se.defaultSelect, Se.additionalSelect),
              menuItemClassName: Se.defaultSelectItem,
              shapeLocation: i.value(),
              shapeLocationChange: this._onLocationChange,
            })
          );
        }
      }
      $e.contextType = te.b;
      var Ke = n("Nu4p");
      const Ye = {
        arrow_down: n("4Njr"),
        arrow_up: n("lOpG"),
        circle: n("br6c"),
        cross: n("m+Gx"),
        diamond: n("01Ho"),
        flag: n("4ZyK"),
        label_down: n("kMtk"),
        label_up: n("Dj0x"),
        square: n("Ly1u"),
        triangle_down: n("leq5"),
        triangle_up: n("flzi"),
        x_cross: n("iB0j"),
      };
      function Qe(e) {
        return Ye[e];
      }
      const Je = [];
      Object.keys(Ke.a).forEach((e) => {
        const t = Ke.a[e];
        Je.push({
          id: t.id,
          value: t.id,
          selectedContent: s.a.createElement(ie.a, { icon: Qe(t.icon) }),
          content: s.a.createElement(ie.b, {
            icon: Qe(t.icon),
            label: t.guiName,
          }),
        });
      });
      class Xe extends s.a.PureComponent {
        render() {
          const {
            id: e,
            shapeStyleId: t,
            className: n,
            shapeStyleChange: l,
            disabled: a,
          } = this.props;
          return s.a.createElement(ie.c, {
            id: e,
            disabled: a,
            className: n,
            hideArrowButton: !0,
            items: Je,
            value: t,
            onChange: l,
          });
        }
      }
      const Ze = window.t("Change Shape"),
        et = window.t("Change Location");
      class tt extends r.PureComponent {
        constructor() {
          super(...arguments),
            (this._onPlotTypeChange = (e) => {
              const { setValue: t } = this.context,
                {
                  property: { plottype: n },
                } = this.props;
              t(n, e, Ze);
            }),
            (this._onLocationChange = (e) => {
              const { setValue: t } = this.context,
                {
                  property: { location: n },
                } = this.props;
              t(n, e, et);
            });
        }
        render() {
          const {
            id: e,
            isRGB: t,
            hasPalette: n,
            property: {
              title: l,
              color: a,
              transparency: s,
              plottype: i,
              location: o,
              visible: c,
            },
          } = this.props;
          return r.createElement(
            T.a,
            {
              grouped: n,
              label: r.createElement(ae, {
                id: e,
                title: l.value(),
                visible: c,
              }),
            },
            !n &&
              !t &&
              r.createElement(Ee.a, {
                disabled: !c.value(),
                color: a,
                transparency: s,
              }),
            r.createElement(Xe, {
              id: Object(J.a)(e, "shape-style-select"),
              disabled: !c.value(),
              className: Se.smallStyleControl,
              shapeStyleId: i.value(),
              shapeStyleChange: this._onPlotTypeChange,
            }),
            r.createElement(Ae, {
              id: Object(J.a)(e, "shape-location-select"),
              disabled: !c.value(),
              className: Be(Se.defaultSelect, Se.additionalSelect),
              menuItemClassName: Se.defaultSelectItem,
              shapeLocation: o.value(),
              shapeLocationChange: this._onLocationChange,
            })
          );
        }
      }
      tt.contextType = te.b;
      var nt = n("m/cY");
      const lt = Object(q.getLogger)("Chart.Study.PropertyPage"),
        at = Object(l.t)("Up"),
        rt = Object(l.t)("Down"),
        st = Object(l.t)("Body"),
        it = Object(l.t)("Wick"),
        ot = Object(l.t)("Border");
      class ct extends r.PureComponent {
        render() {
          const { plot: e, palettes: t, study: n } = this.props,
            l = e.id,
            a = n.properties().styles[l],
            s = e.type,
            i = t.main,
            o = !!n.metaInfo().isRGB;
          if ("line" === s || "bar_colorer" === s || "bg_colorer" === s)
            return i && i.palette && i.paletteProps
              ? r.createElement(Oe, {
                  plot: e,
                  palette: i.palette,
                  paletteProps: i.paletteProps,
                  styleProp: a,
                })
              : r.createElement(Le, {
                  id: l,
                  property: a,
                  isRGB: o,
                  showLineWidth: "line" === s,
                });
          if ("arrows" === s) {
            const s = this._getPlotSwitch(l, pt(n, l), a.visible);
            if (o) return s;
            const i = t.up,
              c = t.down;
            return i || c
              ? r.createElement(
                  r.Fragment,
                  null,
                  s,
                  i && i.palette && i.paletteProps
                    ? r.createElement(Oe, {
                        plot: e,
                        palette: i.palette,
                        paletteProps: i.paletteProps,
                        styleProp: { ...a, title: Object(nt.a)(at) },
                        showSeparator: !1,
                        showOnlyTitle: !0,
                        offset: !0,
                      })
                    : r.createElement(Ve, {
                        id: l,
                        isRGB: o,
                        title: at,
                        color: a.colorup,
                        visible: a.visible,
                        transparency: a.transparency,
                        switchable: !1,
                        grouped: !0,
                        offset: !0,
                      }),
                  c && c.palette && c.paletteProps
                    ? r.createElement(Oe, {
                        plot: e,
                        palette: c.palette,
                        paletteProps: c.paletteProps,
                        styleProp: { ...a, title: Object(nt.a)(rt) },
                        showSeparator: !1,
                        showOnlyTitle: !0,
                        offset: !0,
                      })
                    : r.createElement(Ve, {
                        id: l,
                        isRGB: o,
                        title: rt,
                        color: a.colordown,
                        visible: a.visible,
                        transparency: a.transparency,
                        switchable: !1,
                        grouped: !0,
                        offset: !0,
                      }),
                  r.createElement(V.a.GroupSeparator, null)
                )
              : r.createElement(Ie, {
                  id: l,
                  property: a,
                  isRGB: o,
                  plot: e,
                  palettes: t,
                  styleProp: a,
                });
          }
          if ("chars" === s || "shapes" === s)
            return r.createElement(
              r.Fragment,
              null,
              "chars" === s
                ? r.createElement($e, {
                    id: l,
                    property: a,
                    hasPalette: Boolean(i && i.palette),
                    isRGB: o,
                  })
                : r.createElement(tt, {
                    id: l,
                    property: a,
                    hasPalette: Boolean(i && i.palette),
                    isRGB: o,
                  }),
              i &&
                i.palette &&
                i.paletteProps &&
                r.createElement(Oe, {
                  plot: e,
                  palette: i.palette,
                  paletteProps: i.paletteProps,
                  hideVisibilitySwitch: !0,
                  styleProp: a,
                })
            );
          if (Object(X.isOhlcPlot)(e)) {
            const a = e.target,
              s = n.properties().ohlcPlots[a],
              c = this._getPlotSwitch(l, s.title.value(), s.visible);
            if (o) return c;
            const p = t.wick && t.wick.palette && t.wick.paletteProps,
              d = t.border && t.border.palette && t.border.paletteProps;
            return r.createElement(
              r.Fragment,
              null,
              c,
              i && i.palette && i.paletteProps
                ? r.createElement(Oe, {
                    plot: e,
                    palette: i.palette,
                    paletteProps: i.paletteProps,
                    styleProp: { ...s, title: Object(nt.a)(st) },
                    showSeparator: !1,
                    showOnlyTitle: !0,
                    offset: !0,
                  })
                : r.createElement(Ve, {
                    id: l,
                    isRGB: o,
                    title: st,
                    visible: s.visible,
                    color: s.color,
                    transparency: s.transparency,
                    switchable: !1,
                    grouped: !0,
                    offset: !0,
                  }),
              t.wick &&
                t.wick.palette &&
                t.wick.paletteProps &&
                r.createElement(Oe, {
                  plot: e,
                  palette: t.wick.palette,
                  paletteProps: t.wick.paletteProps,
                  styleProp: { ...s, title: Object(nt.a)(it) },
                  showSeparator: !1,
                  showOnlyTitle: !0,
                  offset: !0,
                }),
              Boolean(!p && s.wickColor) &&
                r.createElement(Ve, {
                  id: l,
                  isRGB: o,
                  title: it,
                  visible: s.visible,
                  color: s.wickColor,
                  transparency: s.transparency,
                  switchable: !1,
                  grouped: !0,
                  offset: !0,
                }),
              t.border &&
                t.border.palette &&
                t.border.paletteProps &&
                r.createElement(Oe, {
                  plot: e,
                  palette: t.border.palette,
                  paletteProps: t.border.paletteProps,
                  styleProp: { ...s, title: Object(nt.a)(ot) },
                  showSeparator: !1,
                  showOnlyTitle: !0,
                  offset: !0,
                }),
              Boolean(!d && s.borderColor) &&
                r.createElement(Ve, {
                  id: l,
                  isRGB: o,
                  title: ot,
                  visible: s.visible,
                  color: s.borderColor,
                  transparency: s.transparency,
                  switchable: !1,
                  grouped: !0,
                  offset: !0,
                }),
              r.createElement(V.a.GroupSeparator, null)
            );
          }
          return lt.logError("Unknown plot type: " + s), null;
        }
        _getPlotSwitch(e, t, n) {
          return r.createElement(
            V.a.Row,
            null,
            r.createElement(
              V.a.Cell,
              { placement: "first", colSpan: 2 },
              r.createElement(ae, { id: e, title: t, visible: n })
            )
          );
        }
      }
      function pt(e, t) {
        const n = Object(i.ensureDefined)(e.metaInfo().styles),
          { title: l } = Object(i.ensureDefined)(n[t]);
        return Object(i.ensureDefined)(l);
      }
      var dt = n("YS4w"),
        ht = n("KacW");
      const ut = window.t("Change Line Style");
      class mt extends s.a.PureComponent {
        constructor() {
          super(...arguments),
            (this._onLineStyleChange = (e) => {
              const { setValue: t } = this.context,
                { lineStyle: n } = this.props;
              Object(ne.b)(n, (n) => t(n, e, ut));
            });
        }
        render() {
          const { lineStyle: e, ...t } = this.props;
          return s.a.createElement(ht.a, {
            ...t,
            lineStyle: Object(ne.a)(e),
            lineStyleChange: this._onLineStyleChange,
          });
        }
      }
      mt.contextType = te.b;
      const bt = window.t("Change Value");
      class wt extends r.PureComponent {
        constructor() {
          super(...arguments),
            (this._onValueChange = (e) => {
              const { setValue: t } = this.context,
                { value: n } = this.props.property;
              t(n, e, bt);
            });
        }
        render() {
          const {
            id: e,
            property: {
              name: t,
              color: n,
              linestyle: l,
              linewidth: a,
              transparency: s,
              value: i,
              visible: o,
            },
          } = this.props;
          return r.createElement(
            T.a,
            {
              labelAlign: "adaptive",
              label: r.createElement(ae, {
                id: e,
                title: t.value(),
                visible: o,
              }),
            },
            r.createElement(
              "div",
              { className: Se.block },
              r.createElement(
                "div",
                { className: Se.group },
                r.createElement(Ee.a, {
                  disabled: !o.value(),
                  color: n,
                  transparency: s,
                  thickness: a,
                }),
                r.createElement(mt, {
                  id: Object(J.a)(e, "line-style-select"),
                  disabled: !o.value(),
                  className: Se.smallStyleControl,
                  lineStyle: l,
                })
              ),
              r.createElement(
                "div",
                {
                  className: Be(
                    Se.wrapGroup,
                    Se.defaultSelect,
                    Se.additionalSelect
                  ),
                },
                r.createElement(dt.b, {
                  input: { id: "", name: "", type: "float", defval: 0 },
                  value: i.value(),
                  disabled: !o.value(),
                  onChange: this._onValueChange,
                })
              )
            )
          );
        }
      }
      wt.contextType = te.b;
      class gt extends r.PureComponent {
        render() {
          const {
            orders: { visible: e, showLabels: t, showQty: n },
          } = this.props;
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              V.a.Row,
              null,
              r.createElement(
                V.a.Cell,
                { placement: "first", colSpan: 2 },
                r.createElement(ae, {
                  id: "chart-orders-switch",
                  title: window.t("Trades on Chart"),
                  visible: e,
                })
              )
            ),
            r.createElement(
              V.a.Row,
              null,
              r.createElement(
                V.a.Cell,
                { placement: "first", colSpan: 2 },
                r.createElement(ae, {
                  id: "chart-orders-labels-switch",
                  title: window.t("Signal Labels"),
                  visible: t,
                })
              )
            ),
            r.createElement(
              V.a.Row,
              null,
              r.createElement(
                V.a.Cell,
                { placement: "first", colSpan: 2 },
                r.createElement(ae, {
                  id: "chart-orders-qty-switch",
                  title: window.t("Quantity"),
                  visible: n,
                })
              )
            )
          );
        }
      }
      gt.contextType = te.b;
      var vt = n("KG+6"),
        yt = n("kk0y");
      const Ct = [
          { value: vt.a.LeftToRight, content: window.t("Left") },
          { value: vt.a.RightToLeft, content: window.t("Right") },
        ],
        ft = window.t("Width (% of the Box)"),
        Et = window.t("Placement"),
        St = window.t("Show Values"),
        Pt = window.t("Text Color"),
        _t = window.t("Change Percent Width"),
        xt = window.t("Change Placement"),
        Ot = window.t("Change Show Values");
      class kt extends r.PureComponent {
        constructor() {
          super(...arguments),
            (this._onPercentWidthChange = (e) => {
              const { setValue: t } = this.context,
                { percentWidth: n } = this.props.property.childs();
              t(n, e, _t);
            }),
            (this._onPlacementChange = (e) => {
              const { setValue: t } = this.context,
                { direction: n } = this.props.property.childs();
              t(n, e, xt);
            }),
            (this._onShowValuesChange = (e) => {
              const { setValue: t } = this.context,
                { showValues: n } = this.props.property.childs();
              t(n, e, Ot);
            });
        }
        render() {
          const {
            title: e,
            percentWidth: t,
            direction: n,
            showValues: l,
            valuesColor: a,
            visible: s,
          } = this.props.property.childs();
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              V.a.Row,
              null,
              r.createElement(
                V.a.Cell,
                { placement: "first", colSpan: 2, grouped: !0 },
                r.createElement(ae, {
                  id: e.value(),
                  title: e.value(),
                  visible: s,
                })
              )
            ),
            r.createElement(
              T.a,
              {
                label: r.createElement(
                  "div",
                  { className: Se.childRowContainer },
                  ft
                ),
                grouped: !0,
              },
              r.createElement(yt.b, {
                input: { id: "", name: "", type: "integer", defval: 0 },
                value: t.value(),
                disabled: !s.value(),
                onChange: this._onPercentWidthChange,
              })
            ),
            r.createElement(
              T.a,
              {
                label: r.createElement(
                  "div",
                  { className: Se.childRowContainer },
                  Et
                ),
                grouped: !0,
              },
              r.createElement(ze.a, {
                id: "hhist-graphic-placement-select",
                disabled: !s.value(),
                className: Se.defaultSelect,
                menuItemClassName: Se.defaultSelectItem,
                items: Ct,
                value: n.value(),
                onChange: this._onPlacementChange,
              })
            ),
            r.createElement(
              V.a.Row,
              null,
              r.createElement(
                V.a.Cell,
                {
                  className: Se.childRowContainer,
                  placement: "first",
                  colSpan: 2,
                  grouped: !0,
                },
                r.createElement(j.b, {
                  label: St,
                  input: {
                    id: e.value() + "_showValues",
                    type: "bool",
                    defval: !0,
                    name: "visible",
                  },
                  value: !l || l.value(),
                  disabled: !s.value(),
                  onChange: this._onShowValuesChange,
                })
              )
            ),
            r.createElement(
              T.a,
              {
                label: r.createElement(
                  "div",
                  { className: Se.childRowContainer },
                  Pt
                ),
                grouped: !0,
              },
              r.createElement(Ee.a, { disabled: s && !s.value(), color: a })
            ),
            this._renderColors(),
            r.createElement(V.a.GroupSeparator, null)
          );
        }
        _renderColors() {
          const {
            colors: e,
            titles: t,
            transparencies: n,
            visible: l,
          } = this.props.property.childs();
          return e.childNames().map((a) =>
            r.createElement(
              T.a,
              {
                key: a,
                grouped: !0,
                label: r.createElement(
                  "div",
                  { className: Se.childRowContainer },
                  t.childs()[a].value()
                ),
              },
              r.createElement(Ee.a, {
                disabled: !l.value(),
                color: e.childs()[a],
                transparency: n.childs()[a],
              })
            )
          );
        }
      }
      kt.contextType = te.b;
      class jt extends r.PureComponent {
        render() {
          const { title: e } = this.props,
            {
              color: t,
              transparency: n,
              width: l,
              style: a,
              visible: s,
            } = this.props.property.childs();
          return r.createElement(
            T.a,
            {
              label: r.createElement(ae, {
                id: e.value(),
                title: e.value(),
                visible: s,
              }),
            },
            r.createElement(Ee.a, {
              disabled: !s.value(),
              color: t,
              transparency: n,
              thickness: l,
            }),
            r.createElement(mt, {
              id: Object(J.a)(e.value(), "line-style-select"),
              disabled: !s.value(),
              className: Se.smallStyleControl,
              lineStyle: a,
            })
          );
        }
      }
      jt.contextType = te.b;
      class Tt extends r.PureComponent {
        render() {
          const { graphicType: e, study: t } = this.props,
            n = t.metaInfo().graphics,
            l = t.properties().graphics,
            a = Object(i.ensureDefined)(n[e]);
          return Object.keys(a).map((t, n) => {
            const a = l[e][t];
            return "horizlines" === e || "vertlines" === e || "lines" === e
              ? r.createElement(jt, {
                  key: t,
                  title: "lines" === e ? a.title : a.name,
                  property: a,
                })
              : "hhists" === e
              ? r.createElement(kt, { key: t, property: a })
              : null;
          });
        }
      }
      const Lt = window.t("Change Font"),
        Nt = ["Verdana", "Courier New", "Times New Roman", "Arial"].map(
          (e) => ({ value: e, content: e })
        );
      class Vt extends r.PureComponent {
        constructor() {
          super(...arguments),
            (this._onFontFamilyChange = (e) => {
              const { setValue: t } = this.context,
                { fontFamily: n } = this.props;
              t(n, e, Lt);
            });
        }
        render() {
          const {
            id: e,
            fontFamily: t,
            className: n,
            disabled: l,
          } = this.props;
          return r.createElement(ze.a, {
            id: e,
            disabled: l,
            className: De()(n, Se.defaultSelect),
            menuItemClassName: Se.defaultSelectItem,
            items: Nt,
            value: t.value(),
            onChange: this._onFontFamilyChange,
          });
        }
      }
      Vt.contextType = te.b;
      var It = n("UXjO");
      const Mt = window.t("Change Font Size"),
        Rt = [10, 11, 12, 14, 16, 20, 24, 28, 32, 40].map((e) => ({
          value: e,
          title: e.toString(),
        }));
      class Bt extends r.PureComponent {
        constructor() {
          super(...arguments),
            (this._onFontSizeChange = (e) => {
              const { setValue: t } = this.context,
                { fontSize: n } = this.props;
              t(n, e, Mt);
            });
        }
        render() {
          const { fontSize: e, ...t } = this.props;
          return r.createElement(It.a, {
            ...t,
            fontSizes: Rt,
            fontSize: e.value(),
            fontSizeChange: this._onFontSizeChange,
          });
        }
      }
      Bt.contextType = te.b;
      const Dt = window.t("Change Visibility"),
        Ft = window.t("Labels Font"),
        zt = window.t("Show Labels"),
        Ht = {
          Traditional: new Set([
            "S5/R5",
            "S4/R4",
            "S3/R3",
            "S2/R2",
            "S1/R1",
            "P",
          ]),
          Fibonacci: new Set(["S3/R3", "S2/R2", "S1/R1", "P"]),
          Woodie: new Set(["S4/R4", "S3/R3", "S2/R2", "S1/R1", "P"]),
          Classic: new Set(["S4/R4", "S3/R3", "S2/R2", "S1/R1", "P"]),
          DM: new Set(["S1/R1", "P"]),
          DeMark: new Set(["S1/R1", "P"]),
          Camarilla: new Set(["S4/R4", "S3/R3", "S2/R2", "S1/R1", "P"]),
        };
      class Wt extends s.a.PureComponent {
        constructor() {
          super(...arguments),
            (this._onChange = (e) => {
              const { setValue: t } = this.context,
                { levelsStyle: n } = this.props.property.childs(),
                { showLabels: l } = n.childs();
              t(l, e, Dt);
            });
        }
        render() {
          const {
            font: e,
            fontsize: t,
            levelsStyle: n,
          } = this.props.property.childs();
          return s.a.createElement(
            s.a.Fragment,
            null,
            s.a.createElement(
              T.a,
              {
                labelAlign: "adaptive",
                label: s.a.createElement("span", null, Ft),
              },
              s.a.createElement(
                "div",
                { className: Se.block },
                s.a.createElement(
                  "div",
                  { className: Se.group },
                  s.a.createElement(Vt, {
                    id: "pivot-points-standard-font-family-select",
                    fontFamily: e,
                  })
                ),
                s.a.createElement(
                  "div",
                  { className: Be(Se.wrapGroup, Se.additionalSelect) },
                  s.a.createElement(Bt, {
                    id: "pivot-points-standard-font-size-select",
                    fontSize: t,
                  })
                )
              )
            ),
            s.a.createElement(
              V.a.Row,
              null,
              s.a.createElement(
                V.a.Cell,
                { placement: "first", colSpan: 2 },
                s.a.createElement(j.b, {
                  label: zt,
                  input: {
                    id: "ShowLabels",
                    type: "bool",
                    defval: !0,
                    name: "visible",
                  },
                  value: n.childs().showLabels.value(),
                  onChange: this._onChange,
                })
              )
            ),
            this._renderColors()
          );
        }
        _renderColors() {
          const { levelsStyle: e, inputs: t } = this.props.property.childs(),
            { colors: n, widths: l, visibility: a } = e.childs(),
            { kind: r } = t.childs(),
            o = Object(i.ensureDefined)(Ht[r.value()]);
          return n
            .childNames()
            .filter((e) => o.has(e))
            .map((e) =>
              s.a.createElement(Ve, {
                key: e,
                id: e,
                title: e,
                color: n.childs()[e],
                visible: a.childs()[e],
                thickness: l.childs()[e],
              })
            );
        }
      }
      Wt.contextType = te.b;
      const Gt = Object(l.t)("Change Visibility"),
        At = Object(l.t)("Volume Profile"),
        Ut = Object(l.t)("Show Values"),
        qt = Object(l.t)("Width (% of the Box)"),
        $t = Object(l.t)("Placement"),
        Kt = Object(l.t)("Developing VA"),
        Yt = [
          { value: vt.a.RightToLeft, content: Object(l.t)("Right") },
          { value: vt.a.LeftToRight, content: Object(l.t)("Left") },
        ];
      class Qt extends s.a.PureComponent {
        constructor() {
          super(...arguments),
            (this._onChange = (e) => {
              this._setHhistsProperty("visible", e);
            }),
            (this._onShowValuesChange = (e) => {
              this._setHhistsProperty("showValues", e);
            }),
            (this._onValueChange = (e) => {
              this._setHhistsProperty("percentWidth", e);
            }),
            (this._onDirectionChange = (e) => {
              this._setHhistsProperty("direction", e);
            });
        }
        render() {
          var e, t;
          const { metaInfo: n } = this.props,
            { graphics: a, styles: r } = this.props.property.childs(),
            { hhists: o, horizlines: c, polygons: p } = a.childs(),
            d = Object(i.ensureDefined)(n.graphics.hhists),
            h = Object.keys(d),
            u = o.childs()[h[0]],
            m = u.childs().visible,
            b = h.map((e) => o.childs()[e].childs().showValues),
            w = u.childs().percentWidth,
            g = u.childs().direction,
            v = h.map((e) => o.childs()[e].childs().valuesColor),
            y = c.childs().pocLines,
            C = Object(i.ensureDefined)(
              null === (e = n.graphics.horizlines) || void 0 === e
                ? void 0
                : e.pocLines
            ),
            f = r.childs().developingPoc,
            E = Object(i.ensureDefined)(
              null === (t = n.styles) || void 0 === t ? void 0 : t.developingPoc
            ),
            S = r.childs().developingVAHigh,
            P = r.childs().developingVALow,
            _ = n.graphics.polygons && n.graphics.polygons.histBoxBg;
          return s.a.createElement(
            s.a.Fragment,
            null,
            s.a.createElement(
              V.a.Row,
              null,
              s.a.createElement(
                V.a.Cell,
                { placement: "first", colSpan: 2 },
                s.a.createElement(j.b, {
                  label: At,
                  input: {
                    id: "VolumeProfile",
                    type: "bool",
                    defval: !0,
                    name: "visible",
                  },
                  value: m.value(),
                  onChange: this._onChange,
                })
              )
            ),
            s.a.createElement(
              V.a.Row,
              null,
              s.a.createElement(
                V.a.Cell,
                { placement: "first" },
                s.a.createElement(
                  "div",
                  { className: Se.childRowContainer },
                  s.a.createElement(j.b, {
                    disabled: !m.value(),
                    label: Ut,
                    input: {
                      id: "ShowValues",
                      type: "bool",
                      defval: !0,
                      name: "visible",
                    },
                    value: b[0].value(),
                    onChange: this._onShowValuesChange,
                  })
                )
              ),
              s.a.createElement(
                V.a.Cell,
                {
                  placement: "last",
                },
                s.a.createElement(Ee.a, {
                  disabled: !m.value() || !b[0].value(),
                  color: v,
                })
              )
            ),
            s.a.createElement(
              V.a.Row,
              null,
              s.a.createElement(
                V.a.Cell,
                { placement: "first" },
                s.a.createElement(
                  "div",
                  { className: Se.childRowContainer },
                  qt
                )
              ),
              s.a.createElement(
                V.a.Cell,
                { placement: "last" },
                s.a.createElement(yt.b, {
                  disabled: !m.value(),
                  input: { id: "", name: "", type: "integer", defval: 0 },
                  value: w.value(),
                  onChange: this._onValueChange,
                })
              )
            ),
            s.a.createElement(
              V.a.Row,
              null,
              s.a.createElement(
                V.a.Cell,
                { placement: "first" },
                s.a.createElement(
                  "div",
                  { className: Se.childRowContainer },
                  $t
                )
              ),
              s.a.createElement(
                V.a.Cell,
                { placement: "last" },
                s.a.createElement(ze.a, {
                  id: "hhist-direction-select",
                  disabled: !m.value(),
                  className: Se.defaultSelect,
                  menuItemClassName: Se.defaultSelectItem,
                  items: Yt,
                  value: g.value(),
                  onChange: this._onDirectionChange,
                })
              )
            ),
            h.map((e) =>
              s.a.createElement(
                s.a.Fragment,
                { key: e },
                o
                  .childs()
                  [e].childs()
                  .colors.childNames()
                  .map((t, n) => {
                    const a = d[e];
                    return s.a.createElement(
                      T.a,
                      {
                        key: n,
                        label: s.a.createElement(
                          "div",
                          { className: Se.childRowContainer },
                          (a && Object(l.t)(a.titles[n])) || ""
                        ),
                      },
                      s.a.createElement(Ee.a, {
                        disabled: !m.value(),
                        color: o.childs()[e].childs().colors.childs()[n],
                        transparency: o
                          .childs()
                          [e].childs()
                          .transparencies.childs()[n],
                      })
                    );
                  })
              )
            ),
            s.a.createElement(
              Ve,
              {
                id: "pocLines",
                title: C.name,
                color: y.childs().color,
                visible: y.childs().visible,
                thickness: y.childs().width,
              },
              s.a.createElement(mt, {
                id: "poc-lines-line-style-select",
                disabled: !y.childs().visible.value(),
                className: Se.smallStyleControl,
                lineStyle: y.childs().style,
              })
            ),
            f &&
              s.a.createElement(
                Ve,
                {
                  id: "developingPoc",
                  title: (E.title && Object(l.t)(E.title)) || "",
                  color: f.childs().color,
                  visible: f.childs().visible,
                  thickness: f.childs().linewidth,
                },
                s.a.createElement(mt, {
                  id: "developing-poc-line-style-select",
                  disabled: !f.childs().visible.value(),
                  className: Se.smallStyleControl,
                  lineStyle: f.childs().linestyle,
                })
              ),
            S &&
              P &&
              s.a.createElement(
                Ve,
                {
                  id: "developingPoc",
                  title: Kt,
                  color: [S.childs().color, P.childs().color],
                  visible: [S.childs().visible, P.childs().visible],
                  thickness: [S.childs().linewidth, P.childs().linewidth],
                },
                s.a.createElement(mt, {
                  id: "developing-VA-line-style-select",
                  disabled:
                    !S.childs().visible.value() && !P.childs().visible.value(),
                  className: Se.smallStyleControl,
                  lineStyle: [S.childs().linestyle, P.childs().linestyle],
                })
              ),
            p &&
              s.a.createElement(
                T.a,
                {
                  label: s.a.createElement(
                    "div",
                    null,
                    (_ && Object(l.t)(_.name)) || ""
                  ),
                },
                s.a.createElement(Ee.a, {
                  color: p.childs().histBoxBg.childs().color,
                  transparency: p.childs().histBoxBg.childs().transparency,
                })
              )
          );
        }
        _setHhistsProperty(e, t) {
          const { setValue: n } = this.context,
            { metaInfo: l, property: a } = this.props,
            r = a.childs().graphics.childs().hhists,
            s = Object.keys(Object(i.ensureDefined)(l.graphics.hhists));
          for (let l = 0; l < s.length; l++) {
            const a = r.childs()[s[l]].child(e);
            n(Object(i.ensureDefined)(a), t, Gt);
          }
        }
      }
      function Jt() {
        const e = Object(i.ensureNotNull)(Object(r.useContext)(Ne)),
          t = e.metaInfo(),
          n = e.properties();
        return s.a.createElement(Qt, { metaInfo: t, property: n });
      }
      Qt.contextType = te.b;
      var Xt = n("KJt4");
      const Zt = {
        VbPFixed: Jt,
        PivotPointsStandard: function () {
          const e = Object(i.ensureNotNull)(
            Object(r.useContext)(Ne)
          ).properties();
          return s.a.createElement(Wt, { property: e });
        },
        VbPVisible: Jt,
      };
      class en extends r.PureComponent {
        render() {
          const e = Object(i.ensureNotNull)(this.context);
          return r.createElement(Ne.Consumer, null, (t) =>
            r.createElement(
              te.a,
              { property: Object(i.ensureNotNull)(t).properties(), model: e },
              r.createElement(
                V.a,
                null,
                this._renderCustomContent(
                  Object(i.ensureNotNull)(t).metaInfo().shortId
                )
              )
            )
          );
        }
        _renderCustomContent(e) {
          if (e in Zt) {
            const t = Zt[e];
            return r.createElement(t, null);
          }
          return null;
        }
      }
      en.contextType = Xt.a;
      var tn = n("Ecpn");
      const nn = window.t("Default"),
        ln = window.t("Precision"),
        an = window.t("Change Precision"),
        rn = [{ value: "default", content: nn }];
      for (let e = 0; e <= 8; e++) rn.push({ value: e, content: e.toString() });
      class sn extends r.PureComponent {
        constructor() {
          super(...arguments),
            (this._onChange = (e) => {
              const { setValue: t } = this.context,
                { precision: n } = this.props;
              t(n, e, an);
            });
        }
        render() {
          const { id: e, precision: t } = this.props;
          return r.createElement(
            T.a,
            { label: ln },
            r.createElement(ze.a, {
              id: e,
              className: Se.defaultSelect,
              menuItemClassName: Se.defaultSelectItem,
              items: rn,
              value: t.value(),
              onChange: this._onChange,
            })
          );
        }
      }
      sn.contextType = te.b;
      const on = window.t("Default"),
        cn = window.t("Override Min Tick"),
        pn = window.t("Change Min Tick"),
        dn = [
          { priceScale: 1, minMove: 1, frac: !1 },
          { priceScale: 10, minMove: 1, frac: !1 },
          { priceScale: 100, minMove: 1, frac: !1 },
          { priceScale: 1e3, minMove: 1, frac: !1 },
          { priceScale: 1e4, minMove: 1, frac: !1 },
          { priceScale: 1e5, minMove: 1, frac: !1 },
          { priceScale: 1e6, minMove: 1, frac: !1 },
          { priceScale: 1e7, minMove: 1, frac: !1 },
          { priceScale: 1e8, minMove: 1, frac: !1 },
          { priceScale: 2, minMove: 1, frac: !0 },
          { priceScale: 4, minMove: 1, frac: !0 },
          { priceScale: 8, minMove: 1, frac: !0 },
          { priceScale: 16, minMove: 1, frac: !0 },
          { priceScale: 32, minMove: 1, frac: !0 },
          { priceScale: 64, minMove: 1, frac: !0 },
          { priceScale: 128, minMove: 1, frac: !0 },
          { priceScale: 320, minMove: 1, frac: !0 },
        ],
        hn = [{ id: "tick-default", value: "default", content: on }];
      for (let e = 0; e < dn.length; e++) {
        const t = dn[e];
        hn.push({
          value: t.priceScale + "," + t.minMove + "," + t.frac,
          content: t.minMove + "/" + t.priceScale,
        });
      }
      class un extends r.PureComponent {
        constructor() {
          super(...arguments),
            (this._onChange = (e) => {
              const { setValue: t } = this.context,
                { minTick: n } = this.props;
              t(n, e, pn);
            });
        }
        render() {
          const { id: e, minTick: t } = this.props;
          return r.createElement(
            T.a,
            { label: cn },
            r.createElement(ze.a, {
              id: e,
              className: Se.defaultSelect,
              menuItemClassName: Se.defaultSelectItem,
              items: hn,
              value: t.value(),
              onChange: this._onChange,
            })
          );
        }
      }
      un.contextType = te.b;
      var mn = n("5YG5");
      class bn extends r.PureComponent {
        constructor() {
          super(...arguments),
            (this._findPlotPalettes = (e) => {
              const { study: t } = this.props,
                n = t.metaInfo(),
                l = Object(i.ensureDefined)(n.palettes);
              return Object(X.isBarColorerPlot)(e) ||
                Object(X.isBgColorerPlot)(e)
                ? {
                    main: {
                      palette: l[e.palette],
                      paletteProps: t.properties().palettes[e.palette],
                    },
                  }
                : this._findPalettesByTargetId(e.id);
            });
        }
        render() {
          const { study: e } = this.props,
            t = e.metaInfo();
          if (Object(tn.a)(t.shortId)) return r.createElement(en, null);
          const n = e.properties(),
            { precision: l, strategy: a, minTick: s } = n,
            i = t.plots.length > 0,
            o = Object(mn.a)(e).canOverrideMinTick();
          return r.createElement(
            V.a,
            null,
            this._plotsElement(),
            this._bandsElement(),
            this._bandsBackgroundsElement(),
            this._areasBackgroundsElement(),
            this._filledAreasElement(),
            this._graphicsElement(),
            i &&
              r.createElement(sn, {
                id: Object(J.a)(t.id, "precision-select"),
                precision: l,
              }),
            o &&
              r.createElement(un, {
                id: Object(J.a)(t.id, "min-tick-select"),
                minTick: s,
              }),
            ee.a.isScriptStrategy(t) &&
              r.createElement(gt, { orders: a.orders })
          );
        }
        _plotsElement() {
          const { study: e } = this.props,
            t = e.metaInfo();
          return new U.a(t)
            .getUserEditablePlots()
            .filter(
              (e) =>
                !(
                  Object(X.isUpColorerPlot)(e) ||
                  Object(X.isDownColorerPlot)(e) ||
                  Object(X.isCandleBorderColorerPlot)(e) ||
                  Object(X.isCandleWickColorerPlot)(e)
                )
            )
            .map((t) => {
              const n = Object(X.isOhlcPlot)(t) ? { ...t, id: t.target } : t,
                l = this._findPlotPalettes(n);
              return r.createElement(ct, {
                key: t.id,
                plot: t,
                palettes: l,
                study: e,
              });
            });
        }
        _bandsElement() {
          const { study: e } = this.props,
            t = e.properties(),
            { bands: n } = t;
          return (
            n &&
            n.childNames().map((e, t) => {
              const l = n.child(e);
              if (!l.isHidden || !l.isHidden.value())
                return r.createElement(wt, {
                  key: t,
                  id: l.name.value(),
                  property: l,
                });
            })
          );
        }
        _bandsBackgroundsElement() {
          const { study: e } = this.props,
            t = e.properties(),
            { bandsBackground: n } = t;
          return (
            n &&
            r.createElement(Ve, {
              id: "bandsBackground",
              title: "Background",
              visible: n.fillBackground,
              color: n.backgroundColor,
              transparency: n.transparency,
            })
          );
        }
        _areasBackgroundsElement() {
          const { study: e } = this.props,
            t = e.metaInfo(),
            n = e.properties(),
            { areaBackground: l } = n;
          return t.isRGB
            ? null
            : l &&
                r.createElement(Ve, {
                  id: "areaBackground",
                  title: "Background",
                  visible: l.fillBackground,
                  color: l.backgroundColor,
                  transparency: l.transparency,
                });
        }
        _filledAreasElement() {
          const { study: e } = this.props,
            t = e.metaInfo(),
            n = t.filledAreas;
          return !n || t.isRGB
            ? []
            : n.map((t) => {
                if (t.isHidden) return null;
                const n = e.properties().filledAreasStyle[t.id],
                  l = t.title || "Background";
                if (t.palette) {
                  const e = this._findPalettesByTargetId(t.id),
                    l = Object(i.ensureDefined)(e.main);
                  return r.createElement(Oe, {
                    key: t.id,
                    area: t,
                    palette: Object(i.ensureDefined)(l.palette),
                    paletteProps: Object(i.ensureDefined)(l.paletteProps),
                    styleProp: n,
                  });
                }
                return r.createElement(Ve, {
                  key: t.id,
                  id: t.id,
                  title: l,
                  color: n.color,
                  visible: n.visible,
                  transparency: n.transparency,
                });
              });
        }
        _graphicsElement() {
          const { study: e } = this.props,
            t = e.metaInfo().graphics;
          return (
            t &&
            Object.keys(t).map((t, n) =>
              r.createElement(Tt, { key: t, graphicType: t, study: e })
            )
          );
        }
        _findPalettesByTargetId(e) {
          const { study: t } = this.props,
            n = t.metaInfo(),
            l = n.plots,
            a = Object(i.ensureDefined)(n.palettes),
            r = {};
          for (const n of l)
            (Object(X.isColorerPlot)(n) || Object(X.isOhlcColorerPlot)(n)) &&
              n.target === e &&
              (r.main = {
                palette: a[n.palette],
                paletteProps: t.properties().palettes[n.palette],
              }),
              Object(X.isUpColorerPlot)(n) &&
                n.target === e &&
                (r.up = {
                  palette: a[n.palette],
                  paletteProps: t.properties().palettes[n.palette],
                }),
              Object(X.isDownColorerPlot)(n) &&
                n.target === e &&
                (r.down = {
                  palette: a[n.palette],
                  paletteProps: t.properties().palettes[n.palette],
                }),
              Object(X.isCandleWickColorerPlot)(n) &&
                n.target === e &&
                (r.wick = {
                  palette: a[n.palette],
                  paletteProps: t.properties().palettes[n.palette],
                }),
              Object(X.isCandleBorderColorerPlot)(n) &&
                n.target === e &&
                (r.border = {
                  palette: a[n.palette],
                  paletteProps: t.properties().palettes[n.palette],
                });
          return r;
        }
      }
      function wn(e) {
        return Object(te.c)(bn, { ...e, property: e.study.properties() });
      }
      class gn extends r.PureComponent {
        render() {
          return r.createElement(
            Xt.a.Provider,
            { value: this.props.model },
            r.createElement(
              Ne.Provider,
              { value: this.props.source },
              r.createElement(wn, { study: this.props.source })
            )
          );
        }
      }
      var vn = n("1yQO"),
        yn = n("sQaR"),
        Cn = n("lgIt");
      n.d(t, "EditObjectDialogRenderer", function () {
        return fn;
      });
      class fn extends yn.a {
        constructor(e, t, n, l) {
          super(),
            (this._timeout = null),
            (this._handleClose = () => {
              a.unmountComponentAtNode(this._container),
                this._setVisibility(!1),
                this._subscription.unsubscribe(
                  this,
                  this._handleCollectionChanged
                );
            }),
            (this._handleCancel = () => {
              this._model.undoToCheckpoint(this._checkpoint);
            }),
            (this._handleSubmit = () => {}),
            (this._handleActiveTabChanged = (e) => {
              c.setValue(this._activeTabSettingsName(), e);
            }),
            (this._source = e),
            (this._model = t),
            (this._propertyPages = l),
            (this._checkpoint = this._ensureCheckpoint(n)),
            (this._subscription = this._model
              .model()
              .dataSourceCollectionChanged()),
            this._subscription.subscribe(this, this._handleCollectionChanged);
        }
        hide(e) {
          e ? this._handleCancel() : this._handleSubmit(), this._handleClose();
        }
        isVisible() {
          return this.visible().value();
        }
        show(e = {}) {
          if (!p.enabled("property_pages")) return;
          const t = this._source.metaInfo();
          if (
            (Object(C.isLineTool)(this._source) &&
              Object(h.trackEvent)(
                "GUI",
                "Drawing Properties",
                this._source.name()
              ),
            Object(v.isStudy)(this._source))
          ) {
            const e =
              !this._source.isPine() || this._source.isStandardPine()
                ? t.description
                : "Custom Pine";
            Object(h.trackEvent)("GUI", "Study Properties", e);
          }
          let n = {
            byId: {
              inputs: { title: window.t("Inputs"), Component: Q },
              style: { title: window.t("Style"), Component: gn },
              properties: { title: window.t("Properties"), Component: K },
            },
            allIds: [],
          };
          const l = new U.a(t);
          l.hasUserEditableInputs() && n.allIds.push("inputs"),
            l.hasUserEditableProperties() && n.allIds.push("properties"),
            l.hasUserEditableStyles() && n.allIds.push("style"),
            this._propertyPages ||
              ((n.byId.visibilities = {
                title: window.t("Visibility"),
                page: this._createVisibilitiesPropertyPage(),
              }),
              n.allIds.push("visibilities")),
            (n = this._getPagesForStudyLineTool(n));
          const s =
            e.initialTab ||
            c.getValue(this._activeTabSettingsName()) ||
            "inputs";
          let i = Object(o.clean)(t.shortDescription, !0);
          a.render(
            r.createElement(S, {
              title: i,
              model: this._model,
              source: this._source,
              initialActiveTab: n.allIds.includes(s) ? s : n.allIds[0],
              pages: n,
              onSubmit: this._handleSubmit,
              onCancel: this._handleCancel,
              onClose: this._handleClose,
              onActiveTabChanged: this._handleActiveTabChanged,
            }),
            this._container
          ),
            this._setVisibility(!0),
            d.emit("edit_object_dialog", {
              objectType: "study",
              scriptTitle: this._source.title(),
            });
        }
        _createVisibilitiesPropertyPage() {
          const e = this._source
            .properties()
            .childs()
            .intervalsVisibilities.childs();
          return Object(vn.a)(
            Object(Cn.a)(this._model, e, this._source.title(!0)),
            "visibility",
            window.t("Visibility")
          );
        }
        _activeTabSettingsName() {
          return "properties_dialog.active_tab.study";
        }
        _ensureCheckpoint(e) {
          return void 0 === e && (e = this._model.createUndoCheckpoint()), e;
        }
        _getPagesForStudyLineTool(e) {
          if (this._propertyPages) {
            const t = this._propertyPages.filter(
                (e) => "coordinates" === e.id || "visibility" === e.id
              ),
              n = {
                allIds: t.map((e) => e.id),
                byId: t.reduce(
                  (e, t) => ({ ...e, [t.id]: { title: t.title, page: t } }),
                  {}
                ),
              };
            return {
              allIds: [...e.allIds, ...n.allIds],
              byId: { ...e.byId, ...n.byId },
            };
          }
          return e;
        }
        _handleCollectionChanged() {
          null === this._timeout &&
            (this._timeout = setTimeout(() => {
              this._closeDialogIfSourceIsDeleted(), (this._timeout = null);
            }));
        }
        _closeDialogIfSourceIsDeleted() {
          null === this._model.model().dataSourceForId(this._source.id()) &&
            this._handleClose();
        }
      }
    },
    ZtdB: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path stroke="currentColor" d="M4.5 20v-7m3 7V10m3 10V8m3 12V10m3 10v-8m3 8V10m3 10V8"/></svg>';
    },
    br6c: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><circle stroke="currentColor" cx="14" cy="14" r="6.5"/></svg>';
    },
    flzi: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M19.424 16.735l.478.765H8.098l.478-.765 5-8L14 8.057l.424.678 5 8z"/></svg>';
    },
    iB0j: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path stroke="currentColor" d="M9 9l11 11M9 20L20 9"/></svg>';
    },
    kBAl: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M9.8 2.7l.7-.7.7.7 2.1 2.1.2.2H18v9.5l.2.2 2.1 2.1.2.2H24v1h-3.5l-.2.2-2.1 2.1-.7.7-.7-.7-2.1-2.1-.7-.7.7-.7 2.1-2.1.2-.2V6h-3.5l-.2.2-2.1 2.1-.2.2V24H5.5v-1H10V8.5l-.2-.2-2.1-2.1-.7-.7.7-.7 2.1-2.1zM8.4 5.5l2.09 2.09 2.09-2.09-2.09-2.09L8.41 5.5zm9.09 14.09l-2.09-2.09 2.09-2.09 2.09 2.09-2.09 2.09z"/></svg>';
    },
    kMtk: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M11 8.5h-.5v9.707l.146.147 3 3 .354.353.354-.353 3-3 .146-.147V8.5H11z"/></svg>';
    },
    lOpG: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M14 7l7.424 6.114a.5.5 0 0 1-.318.886H18.5v7h-9v-7H6.894a.5.5 0 0 1-.318-.886L14 7z"/></svg>';
    },
    leq5: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M19.424 11.265l.478-.765H8.098l.478.765 5 8 .424.678.424-.678 5-8z"/></svg>';
    },
    lgIt: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return f;
      });
      var l = n("Kxc7"),
        a = n("HSjo"),
        r = n("hY0g"),
        s = n.n(r),
        i = n("pPtI");
      const o = window.t("Ticks"),
        c = window.t("Seconds"),
        p = window.t("Minutes"),
        d = window.t("Hours"),
        h = window.t("Days"),
        u = window.t("Weeks"),
        m = window.t("Months"),
        b = (window.t("Ranges"), [1, 59]),
        w = [1, 59],
        g = [1, 24],
        v = [1, 366],
        y = [1, 52],
        C = [1, 12];
      function f(e, t, n) {
        const r = [];
        if (l.enabled("tick_resolution")) {
          const l = Object(a.c)(
            {
              checked: Object(a.b)(
                e,
                t.ticks,
                `Change ${n} Visibility On Ticks`
              ),
            },
            { id: "IntervalsVisibilitiesTicks", title: o }
          );
          r.push(l);
        }
        if (Object(i.isSecondsEnabled)()) {
          const l = Object(a.n)(
            {
              checked: Object(a.b)(
                e,
                t.seconds,
                `Change ${n} Visibility On Seconds`
              ),
              from: Object(a.b)(e, t.secondsFrom, `Change ${n} Seconds From`),
              to: Object(a.b)(e, t.secondsTo, `Change ${n} Seconds To`),
            },
            {
              id: "IntervalsVisibilitiesSecond",
              title: c,
              min: new s.a(b[0]),
              max: new s.a(b[1]),
            }
          );
          r.push(l);
        }
        const f = Object(a.n)(
            {
              checked: Object(a.b)(
                e,
                t.minutes,
                `Change ${n} Visibility On Minutes`
              ),
              from: Object(a.b)(e, t.minutesFrom, `Change ${n} Minutes From`),
              to: Object(a.b)(e, t.minutesTo, `Change ${n} Minutes To`),
            },
            {
              id: "IntervalsVisibilitiesMinutes",
              title: p,
              min: new s.a(w[0]),
              max: new s.a(w[1]),
            }
          ),
          E = Object(a.n)(
            {
              checked: Object(a.b)(
                e,
                t.hours,
                `Change ${n} Visibility On Hours`
              ),
              from: Object(a.b)(e, t.hoursFrom, `Change ${n} Hours From`),
              to: Object(a.b)(e, t.hoursTo, `Change ${n} Hours To`),
            },
            {
              id: "IntervalsVisibilitiesHours",
              title: d,
              min: new s.a(g[0]),
              max: new s.a(g[1]),
            }
          ),
          S = Object(a.n)(
            {
              checked: Object(a.b)(e, t.days, `Change ${n} Visibility On Days`),
              from: Object(a.b)(e, t.daysFrom, `Change ${n} Days From`),
              to: Object(a.b)(e, t.daysTo, `Change ${n} Days To`),
            },
            {
              id: "IntervalsVisibilitiesDays",
              title: h,
              min: new s.a(v[0]),
              max: new s.a(v[1]),
            }
          );
        r.push(f, E, S);
        const P = Object(a.n)(
            {
              checked: Object(a.b)(
                e,
                t.weeks,
                `Change ${n} Visibility On Weeks`
              ),
              from: Object(a.b)(e, t.weeksFrom, `Change ${n} Weeks From`),
              to: Object(a.b)(e, t.weeksTo, `Change ${n} Weeks To`),
            },
            {
              id: "IntervalsVisibilitiesWeeks",
              title: u,
              min: new s.a(y[0]),
              max: new s.a(y[1]),
            }
          ),
          _ = Object(a.n)(
            {
              checked: Object(a.b)(
                e,
                t.months,
                `Change ${n} Visibility On Months`
              ),
              from: Object(a.b)(e, t.monthsFrom, `Change ${n} Months From`),
              to: Object(a.b)(e, t.monthsTo, `Change ${n} Months To`),
            },
            {
              id: "IntervalsVisibilitiesMonths",
              title: m,
              min: new s.a(C[0]),
              max: new s.a(C[1]),
            }
          );
        return r.push(P, _), r;
      }
    },
    "m+Gx": function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path stroke="currentColor" d="M9 14.5h11M14.5 20V9"/></svg>';
    },
    "rlj/": function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 17v5.5h4v-18h4v12h4v-9h4V21"/></svg>';
    },
    "sPU+": function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M10.5 13a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM16.5 19a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM22.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/></svg>';
    },
    tH7p: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 13.52v4.98a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1V8.914c0-.89-1.077-1.337-1.707-.707l-4.66 4.66a1 1 0 0 1-1.332.074l-3.716-2.973a1 1 0 0 0-1.198-.039l-3.96 2.772a1 1 0 0 0-.427.82z"/></svg>';
    },
    tQCG: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M13 11.5l-1.915-1.532a1 1 0 0 0-1.198-.039l-3.96 2.772a1 1 0 0 0-.427.82V18.5a1 1 0 0 0 1 1H13m3.5-7l4.293-4.293c.63-.63 1.707-.184 1.707.707V18.5a1 1 0 0 1-1 1H16"/><path fill="currentColor" d="M14 6h1v2h-1zM14 11h1v2h-1zM14 16h1v2h-1zM14 21h1v2h-1z"/></svg>';
    },
    wwEg: function (e, t, n) {
      e.exports = {
        smallStyleControl: "smallStyleControl-11tnC1DU",
        additionalSelect: "additionalSelect-11tnC1DU",
        childRowContainer: "childRowContainer-11tnC1DU",
        defaultSelect: "defaultSelect-11tnC1DU",
        defaultSelectItem: "defaultSelectItem-11tnC1DU",
        block: "block-11tnC1DU",
        group: "group-11tnC1DU",
        wrapGroup: "wrapGroup-11tnC1DU",
        textMarkGraphicBlock: "textMarkGraphicBlock-11tnC1DU",
        textMarkGraphicWrapGroup: "textMarkGraphicWrapGroup-11tnC1DU",
      };
    },
    xHjM: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 16.5l4.586-4.586a2 2 0 0 1 2.828 0l3.172 3.172a2 2 0 0 0 2.828 0L23.5 10.5"/></svg>';
    },
  },
]);
