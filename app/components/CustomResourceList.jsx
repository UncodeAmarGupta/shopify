import { LegacyCard, ResourceItem, ResourceList, Text } from "@shopify/polaris";
export const itemsResource = [
  {
    id: "products",
    title: "Products",
  },
  {
    id: "customers",
    title: "Customers",
  },
  {
    id: "orders",
    title: "Orders",
  },
];

export function ResourceListExample(props) {
  const { items, selectedItems, setSelectedItems } = props;

  return (
    <LegacyCard>
      <ResourceList
        resourceName={{ singular: "Entity", plural: "Entities" }}
        items={items}
        selectedItems={selectedItems}
        onSelectionChange={setSelectedItems}
        selectable
        renderItem={(items) => {
          const { id, title } = items;
          return (
            <ResourceItem
              id={id}
              onClick={(id) => {
                console.log(id, "resoruce items");
              }}
              name={title}
            >
              <Text as="h3" fontWeight="bold" variant="bodyMd">
                {title}
              </Text>
            </ResourceItem>
          );
        }}
      ></ResourceList>
    </LegacyCard>
  );
}
