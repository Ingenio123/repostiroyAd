import { FC, useEffect } from "react";
import GridBodyatom from "../atomo/GridBodyAtom";
import TextAtom from "../atomo/TextSpanAtom";
import { Box } from "@chakra-ui/react";
import di from "../../../di";
import { useCodeCuponListState } from "../../../hooks/CuponCodeRecoil";
import CuponCodeVM from "../../../vm/CuponCodeList";
import { TableMolecula } from "./TableMolecula";

interface IProps {
  deleteCoupon(id: string): void;
}

const GridBodyMolecula: FC<IProps> = ({ deleteCoupon }) => {
  const [list, setList] = useCodeCuponListState();
  const cuponCodeVM = list.map((codeEntity) => new CuponCodeVM(codeEntity));

  // console.log(cuponCodeVM);
  useEffect(() => {
    const asyncFnc = async () => {
      setList(await di.cupon.getCuponCodes());
    };
    asyncFnc();
  }, []);

  return <TableMolecula deleteCoupon={deleteCoupon} codeList={cuponCodeVM} />;
};

export default GridBodyMolecula;

//  return (
//    <GridBodyatom gridTemplateColumns="repeat(5,1fr)">
//      {/* fontWeight="700" size="1rem" */}
//      {cuponCodeVM.length > 0 && (
//        <>
//          {cuponCodeVM.map((e) => (
//            <Box as="div" textAlign={"center"}>
//              <TextAtom size="1rem" color="gray.800" fontWeight="bold">
//                {e.valor}
//              </TextAtom>
//            </Box>
//          ))}
//        </>
//      )}
//    </GridBodyatom>
//  );
