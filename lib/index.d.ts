import type { Omit, RefreshControlProps, ScrollViewProps, StyleProp, ViewStyle } from 'react-native';
import { ScrollView } from 'react-native';
import type { MutableRefObject, ReactElement } from 'react';
import React from 'react';
interface Props<T> extends Omit<ScrollViewProps, 'refreshControl'> {
    innerRef?: MutableRefObject<ScrollView | undefined>;
    loading?: boolean;
    refreshing?: RefreshControlProps['refreshing'];
    onRefresh?: RefreshControlProps['onRefresh'];
    refreshControl?: boolean;
    onEndReached?: () => void;
    onEndReachedThreshold?: number;
    style?: StyleProp<ViewStyle>;
    data: T[];
    renderItem: ({ item, i }: {
        item: T;
        i: number;
    }) => ReactElement;
    LoadingView?: React.ComponentType<any> | React.ReactElement | null;
    ListHeaderComponent?: React.ReactNode | null;
    ListEmptyComponent?: React.ComponentType<any> | React.ReactElement | null;
    ListFooterComponent?: React.ComponentType<any> | React.ReactElement | null;
    ListHeaderComponentStyle?: StyleProp<ViewStyle>;
    contentContainerStyle?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    numColumns?: number;
    keyExtractor?: ((item: T | any, index: number) => string) | undefined;
    refreshControlProps?: Omit<RefreshControlProps, 'onRefresh' | 'refreshing'>;
}
declare function MasonryList<T>(props: Props<T>): ReactElement;
declare const _default: React.MemoExoticComponent<typeof MasonryList>;
export default _default;
