import React from 'react';
import PropTypes, {string} from 'prop-types';
import {TouchableOpacity, FlatList, StyleSheet, Text, View} from 'react-native';

function Item({item, onSelect}) {
  console.log('Mylist', JSON.stringify(item));

  return (
    <TouchableOpacity onPress={() => onSelect(item)}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
}

export function MyList(props) {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    item => {
      const id = item.id;
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
      console.log(JSON.stringify(item));

      props.onSelect(item.title);
    },
    [selected],
  );

  return (
    <View>
      {props.data.length > 0 && (
        <FlatList
          style={props.stylex !== undefined ? props.stylex : styles.flatList}
          ListHeaderComponent={
            props.ListHeaderComponent !== undefined
              ? props.ListHeaderComponent
              : ''
          }
          data={props.data}
          renderItem={
            props.item !== undefined
              ? props.item
              : ({item}) => <Item item={item} onSelect={onSelect} />
          }
          keyExtractor={item => String(item.id)}
          extraData={selected}
        />
        
      )}

      {/* {props.data.length === 0 && <Text> {props.t(props.nodatatext)} </Text>} */}
      {props.data.length === 0 && <Text> {props.nodatatext} </Text>}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 6,
    height: 10,
  },
  title: {
    fontSize: 23,
    padding: 1,
    marginVertical: 1,
    marginHorizontal: 1,
  },
  flatList: {
   // height: 420,
    // backgroundColor: '#f9c2ff',
    flexGrow: 0,
  },
});

MyList.defaultProps = {
  color: null,
  fontSize: 15,
  darkTheme: false,
  style: {},
  footer: '',
  nodatatext: 'common.mylist.nodata',
};

MyList.propTypes = {
  darkTheme: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  data: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  color: PropTypes.string,
  // onPress: PropTypes.func.isRequired,
  fontSize: PropTypes.number,
};

export default MyList;
