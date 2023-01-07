<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
	die();
}

use Bitrix\main\Localization\Loc;
$this->setFrameMode(false);


?>


<?if(!empty($arParams["TIME"]) && !empty($arParams["TIME"])):?>
    <div id="countdown" class="countdown">
        <div id="sec" countdown="<?=$arParams["TIME"];?>"></div>
        <?if(!empty($arParams["LINK_SAVE"])):?>
            <a href="#" id="user" onclick='saveCoockie("<?=$_COOKIE["BX_USER_ID"]?>")'>
                <?=Loc::getMessage("TITLE_LINK")?>
            </a>
        <?endif;?>
    </div>
<?endif;?>


