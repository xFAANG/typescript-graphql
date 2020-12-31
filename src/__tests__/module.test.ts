import { graphql } from 'graphql';
import { resolve } from 'path';
import { getSchemaForCode, gql } from '..';

describe('Application', () => {
  test('sums numbers', async () => {
    const schema = getSchemaForCode({
      queryModulePaths: [resolve(__dirname, './module')],
    });

    expect(schema).toEqualSchema(gql`
      type Query {
        sum(a: Int, b: Int): Int
        getFullName(firstName: String, lastName: String): String
      }
    `);

    expect(
      await graphql({
        schema,
        source: gql`
          query {
            sum(a: 2, b: 2)
            getFullName(firstName: "John", lastName: "Smith")
          }
        `,
      })
    ).toEqual({ data: { sum: 4, getFullName: 'John Smith' } });
  });
});
