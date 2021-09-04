export type ResponseData = {
  id: number;
  category_id: string;
  category_name: string;
  categories: {
    root: string;
    '19436e57-515c-474b-83bf-a55d6480ac80': string;
  };
  product_group: {
    key: string;
    label: string;
    value: string;
  };
  product_group_id: string;
  product_group_name: string;
  manufacturer: string;
  product_name: string;
  ean: string;
  materials: [];
  documents: [];
  specification: {
    'isRalColorMatched_::specification-field::_83b247f9-6f53-469f-8575-0d0994b53c11': boolean;
    'isRalColorMatched_::specification-field::_acd6d872-7fdb-4f92-804a-58005178a0f3': boolean;
    'Shank uf_829a143e-17db-4937-88a2-7c7fe41c9816_::specification-field::_35383e50-b363-4569-8c0a-aa3d4bf06552': {
      unit: string;
      unitValue: string;
    };
    'Unit Field_d48ea611-fe2f-47c0-8744-c39daaff47cf_::specification-field::_28289b20-45a8-42a9-91b3-46fa29db37b6': {
      unit: string;
      unitValue: string;
    };
    'Color Swatch_d002d623-ea25-4f72-81d5-43ca5a4da474_::specification-field::_acd6d872-7fdb-4f92-804a-58005178a0f3': string;
    'Shashank color_faefb7b7-6a73-4258-8bdd-d07966566e29_::specification-field::_83b247f9-6f53-469f-8575-0d0994b53c11': string;
  };
  building_location_of: string;
  material_current_location: string;
  product_unit: string;
  building_id: string;
  specification_group: [
    {
      'Shank uf': {
        unit: string;
        unitValue: string;
      };
    },
    {
      'Unit Field': {
        unit: string;
        unitValue: string;
      };
    },
    {
      'Color Swatch': string;
      isRalColorMatched: boolean;
    },
    {
      'Shashank color': string;
      isRalColorMatched: boolean;
    },
  ];
  available_for_sell: number;
  available_for_sell_until: string;
  images: [
    {
      uid: string;
      file_name: string;
      file_path: string;
      object_url: string;
      bucket_name: string;
    },
  ];
  total_amount: number;
  amount_unit: string;
};

export type ResponseObject = {
  statusCode: number;
  requestId: string;
  status: string;
  logStreamName: string;
  data: {
    data: ResponseData[];
    meta: {
      hasMoreData: boolean;
      cursor: number;
    };
  };
};

export const fetchData = async (
  cursor: number,
  limit: number,
): Promise<ResponseObject> => {
  const endpoint = `https://asterix-dev.concular.com/material-service/marketplace/mp`;
  const requestBody = { cursor: cursor, limit: limit };
  const fetchRequest = fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });
  const response = await fetchRequest;

  if (response.status == 200) {
    const jsonResponse = await response.json();
    return jsonResponse;
  }
  throw new Error(response.statusText);
};
