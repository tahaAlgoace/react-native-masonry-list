var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { RefreshControl, ScrollView, View } from 'react-native';
import React, { memo, useState } from 'react';
const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }, onEndReachedThreshold) => {
    const paddingToBottom = contentSize.height * onEndReachedThreshold;
    return (Math.ceil(layoutMeasurement.height + contentOffset.y) >=
        contentSize.height - paddingToBottom);
};
function MasonryList(props) {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const { refreshing, data, innerRef, ListHeaderComponent, ListEmptyComponent, ListFooterComponent, ListHeaderComponentStyle, containerStyle, contentContainerStyle, renderItem, onEndReachedThreshold, onEndReached, onRefresh, loading, LoadingView, numColumns = 2, horizontal, onScroll, removeClippedSubviews = false, keyExtractor, keyboardShouldPersistTaps = 'handled', refreshControl = true, refreshControlProps, } = props;
    const { style } = props, propsWithoutStyle = __rest(props, ["style"]);
    return (<ScrollView {...propsWithoutStyle} ref={innerRef} style={[{ flex: 1, alignSelf: 'stretch' }, containerStyle]} contentContainerStyle={contentContainerStyle} keyboardShouldPersistTaps={keyboardShouldPersistTaps} removeClippedSubviews={removeClippedSubviews} refreshControl={refreshControl ? (<RefreshControl refreshing={!!(refreshing || isRefreshing)} onRefresh={() => {
                setIsRefreshing(true);
                onRefresh === null || onRefresh === void 0 ? void 0 : onRefresh();
                setIsRefreshing(false);
            }} {...refreshControlProps}/>) : null} scrollEventThrottle={16} onScroll={(e) => {
            const nativeEvent = e.nativeEvent;
            if (isCloseToBottom(nativeEvent, onEndReachedThreshold || 0.0)) {
                onEndReached === null || onEndReached === void 0 ? void 0 : onEndReached();
            }
            onScroll === null || onScroll === void 0 ? void 0 : onScroll(e);
        }}>
      <>
        <View style={ListHeaderComponentStyle}>{ListHeaderComponent}</View>
        {(data === null || data === void 0 ? void 0 : data.length) === 0 && ListEmptyComponent ? (React.isValidElement(ListEmptyComponent) ? (ListEmptyComponent) : (<ListEmptyComponent />)) : (<View style={[
                {
                    flex: 1,
                    flexDirection: horizontal ? 'column' : 'row',
                },
                style,
            ]}>
            {Array.from(Array(numColumns), (_, num) => {
                return (<View key={`masonry-column-${num}`} style={{
                        flex: 1 / numColumns,
                        flexDirection: horizontal ? 'row' : 'column',
                    }}>
                  {data === null || data === void 0 ? void 0 : data.map((el, i) => {
                        if (i % numColumns === num) {
                            return (<View key={(keyExtractor === null || keyExtractor === void 0 ? void 0 : keyExtractor(el, i)) || `masonry-row-${num}-${i}`}>
                            {renderItem({ item: el, i })}
                          </View>);
                        }
                        return null;
                    }).filter((e) => !!e)}
                </View>);
            })}
          </View>)}
        {loading && LoadingView}
        {ListFooterComponent}
      </>
    </ScrollView>);
}
export default memo(MasonryList);
