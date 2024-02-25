import { gql } from "@apollo/client/core";
import _ from "lodash";
import * as testUtils from "./testUtils.js";

test('bootstrap', async () => {
  await testUtils.bootstrap();
});