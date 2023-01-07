<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
	die();
}

class CEmptyComponent extends CBitrixComponent
{

    public function onPrepareComponentParams($arParams)
    {
        if(!empty($arParams["TIME"])) {
            $arParams["TIME"] = (int) $arParams["TIME"];
            if($arParams["TIME"] >= 59) {
                $arParams["TIME"] = 59;
            }
        }
        return $arParams;
    }

    public function executeComponent()
	{
		$this->includeComponentTemplate();
	}
}