import { style } from '@angular/animations';
import { NONE_TYPE } from '@angular/compiler';
import { Component, Directive, OnInit } from '@angular/core';
import { IProduct } from '../models/cardProduct';

@Component({
  selector: 'app-major-screen',
  templateUrl: './major-screen.component.html',
  styleUrls: ['./major-screen.component.scss'],
})
export class MajorScreenComponent implements OnInit {
  /*   @Input() product: IProduct; */
  modalView = false;
  /*   visibleCard: boolean = true; */

  imgUrlNBB =
    'https://75.img.avito.st/image/1/1.VpyAvLax-nW2C3h4oLEIz2kf-nE8HfB3.kt2OAD6vju7t1M6eamqK5mh-9lGufsGyrtWkWDagKJ4';
  imgUrlNBBBlack =
    'https://39.img.avito.st/image/1/1.eipB0ba61sN3eBTGObQkeahy0Mf18t4B8HLSy_V61A.4SkXvHcYYEfjKniyuktJ15uTyeNn1tFH5sH3pDq29Tg';

  imgUrlblock1NBP =
    'https://svet-vitebsk.by/wp-content/uploads/2022/01/krug-belyj-1.jpg';

  imgUrlblock1036001 =
    'https://svet-vitebsk.by/wp-content/uploads/2022/01/krug-belyj-reshetka.jpg';

  imgUrlblock10460001 =
    'https://svet-vitebsk.by/wp-content/uploads/2022/01/nbp_04_60_001_white.jpg';

  imgUrlblock10460002 =
    'https://svet-vitebsk.by/wp-content/uploads/2022/01/bannik-oval-reshetka-belyj1.jpg';

  /*     images for card */

  imgUrlCard2Img1 =
    'https://svet-vitebsk.by/wp-content/uploads/2022/01/molochnyj-gladkij.jpg';

  imgUrlCard2Img2 =
    'https://svet-vitebsk.by/wp-content/uploads/2022/01/dymchatyj-gladkij.jpg';

  imgUrlCard2Img3 =
    'https://svet-vitebsk.by/wp-content/uploads/2022/01/zolotoj-gladkij.jpg';

  imgUrlCard2Img4 =
    'https://svet-vitebsk.by/wp-content/uploads/2022/01/prozrachnyj-gladkij.jpg';

  imgUrlCard2Img5 =
    'https://svet-vitebsk.by/wp-content/uploads/2022/01/60343-11.jpg';

  imgUrlCard3Img1 =
    'https://svet-vitebsk.by/wp-content/uploads/2022/03/img_3093-kopija.png';

  imgUrlCard3Img2 =
    'https://svet-vitebsk.by/wp-content/uploads/2022/01/img_3064-kopija.png';

  imgUrlCard3Img3 =
    'https://svet-vitebsk.by/wp-content/uploads/2022/01/panell.png';
  imgUrlCard3Img4 =
    'https://svet-vitebsk.by/wp-content/uploads/2022/01/lpo_12-2h18-012_uxl_4.jpg';
  imgUrlCard3Img5 =
    'https://svet-vitebsk.by/wp-content/uploads/2022/02/009.jpg';
  imgUrlCard4Img1 =
    'https://svet-vitebsk.by/wp-content/uploads/2022/03/0003-1.jpg';
  imgUrlCard4Img2 =
    'https://svet-vitebsk.by/wp-content/uploads/2022/03/003.jpg';
  imgUrlCard4Img3 =
    'https://svet-vitebsk.by/wp-content/uploads/2022/03/001-2.jpg';
  imgUrlCard4Img4 =
    'https://svet-vitebsk.by/wp-content/uploads/2022/03/img_0079.png';
  imgUrlCard4Img5 =
    'https://svet-vitebsk.by/wp-content/uploads/2022/03/002-1.jpg';
  imgUrlCard4Img6 =
    'https://svet-vitebsk.by/wp-content/uploads/2022/03/002-3.jpg';

  /*     text information about card */
  titleImg1Card1 = 'Светильник для бани и сауны IP65';
  titleImg2Card1 = 'СВЕТИЛЬНИК НБП 03-60(100)-001 УХЛ1';
  titleImg3Card1 = 'СВЕТИЛЬНИК НБП 03-60(100)-002 УХЛ1';
  titleImg4Card1 = 'СВЕТИЛЬНИК НБП 04-60(100)-001 УХЛ1';
  titleImg5Card1 = 'СВЕТИЛЬНИК НБП 04-60(100)-002 УХЛ1';
  /*   card2 */
  titleImg1Card2 = 'СВЕТИЛЬНИК НТУ 01-ХХ-ХХ1, ОПАЛ';
  titleImg2Card2 = 'СВЕТИЛЬНИК НТУ 01-ХХ-ХХ5, ДЫМЧАТЫЙ';
  titleImg3Card2 = 'СВЕТИЛЬНИК НТУ 02-ХХ-ХХ3, ЗОЛОТОЙ';
  titleImg4Card2 = 'СВЕТИЛЬНИК НТУ 02-ХХ-ХХ2, ПРОЗРАЧНЫЙ';
  titleImg5Card2 = 'СВЕТИЛЬНИК НТУ 01-60-25Х,C ПОДСТАВКОЙ';
  /*   card3 */
  titleImg1Card3 = 'СВЕТИЛЬНИК SPO-SVET-36-1200-6500';
  titleImg2Card3 = 'СВЕТИЛЬНИК SPO-SVET-18-600-6500';
  titleImg3Card3 = 'СВЕТИЛЬНИК ДПО 10-4Х8-001';
  titleImg4Card3 = 'СВЕТИЛЬНИК ЛПО 12-2Х18-012 УХЛ4';
  titleImg5Card3 = 'Светильник ДБО 15-15-001 УХЛ4';

  /* card4 */
  titleImg1Card4 = 'Удлинитель силовой с розеткой';
  titleImg2Card4 = 'Удлинитель силовой на рамке с розеткой';
  titleImg3Card4 = 'Удлинитель на катушке (без розеток)';
  titleImg4Card4 = 'Удлинитель на катушке с 4-мя розетками';
  titleImg5Card4 = 'Удлинитель на катушке с 4-мя розетками с/з';
  titleImg6Card4 = 'Удлинитель на катушке с 4-мя розетками с/з';

  /*   btn information about card */

  information = 'Подробней';
  information2 = 'Подробней';
  information3 = 'Подробней';
  information4 = 'Подробней';
  information5 = 'Подробней';
  btnBuy = 'Заказать';
  /*   funcction click btn 'informations' */

  /*   async clickBuy() {
    const CardBuyComponent = await import('../card-buy/card-buy.component');
  } */
  clickInfo(): any {
    this.titleImg1Card1 =
      'Степень защиты IP65, Мощность: 60 Вт, Источник света Патрон Е27, Предназначены для для освещения жилых, подсобных, производственных и др. помещений с повышенной влажностью и температурой (бани, сауны, бассейны и т.д.)';
    /*  if ((this.visibleCard = true)) {
      this.titleImg1Card1 =
        'Степень защиты IP65, Мощность: 60 Вт, Источник света Патрон Е27, Предназначены для для освещения жилых, подсобных, производственных и др. помещений с повышенной влажностью и температурой (бани, сауны, бассейны и т.д.)';
    } else {
      this.titleImg1Card1 = '';
    } */
  }

  clickInfoImg2() {
    this.titleImg2Card1 =
      'Степень защиты IP54, Мощность: 60 Вт (100Вт), Источник света Патрон Е27, Предназначены для для освещения жилых, подсобных, производственных и др. помещений с повышенной влажностью и температурой (бани, сауны, бассейны и т.д.)';
  }

  clickInfoImg3() {
    this.titleImg3Card1 =
      'Степень защиты: IP54, Мощность: 60 Вт (100Вт), Источник света: Патрон Е27, Предназначены для для освещения жилых, подсобных, производственных и др. помещений с повышенной влажностью и температурой (бани, сауны, бассейны и т.д.)';
  }

  clickInfoImg4() {
    this.titleImg4Card1 =
      'Степень защиты: IP54, Мощность: 60 Вт (100Вт), Источник света: Патрон Е27, Предназначены для для освещения жилых, подсобных, производственных и др. помещений с повышенной влажностью и температурой (бани, сауны, бассейны и т.д.)';
  }

  clickInfoImg5() {
    this.titleImg5Card1 =
      'Степень защиты: IP54, Мощность: 60Вт (100Вт), Источник света: Патрон Е27, Предназначены для для освещения жилых, подсобных, производственных и др. помещений с повышенной влажностью и температурой (бани, сауны, бассейны и т.д.)';
  }

  textNtu =
    'Степень защиты: IP44. Мощность: 60 (100,150) Вт. Источник света: Патрон Е27. Предназначены для освещения улиц, придомовых территорий, дорог, скверов, парков.';

  clickInfoImg1Card2() {
    this.titleImg1Card2 = this.textNtu;
  }

  clickInfoImg2Card2() {
    this.titleImg2Card2 = this.textNtu;
  }

  clickInfoImg3Card2() {
    this.titleImg3Card2 = this.textNtu;
  }

  clickInfoImg4Card2() {
    this.titleImg4Card2 = this.textNtu;
  }

  clickInfoImg5Card2() {
    this.titleImg5Card2 = this.textNtu;
  }

  clickInfoImg1Card3() {
    this.titleImg1Card3 =
      'Степень защиты: IP40. Мощность: 36 Вт. Цветовая температура: 6500К. Светильники предназначены для общего освещения административных и общественных помещений.';
  }

  clickInfoImg2Card3() {
    this.titleImg2Card3 =
      'Степень защиты: IP40. Мощность: 18 Вт. Цветовая температура: 6500К. Светильники предназначены для общего освещения административных и общественных помещений.';
  }

  clickInfoImg3Card3() {
    this.titleImg3Card3 =
      'Степень защиты: IP40. Мощность: 32 Вт. Источник света: Светодиодные линейки. Светильники предназначены для общего освещения административных и общественных помещений.';
  }

  clickInfoImg4Card3() {
    this.titleImg4Card3 =
      'Степень защиты: IP40. Мощность: 2х18Вт. Источник света: Люминесцентная лампа. Подходят для установки в школах, детских садах, больницах и т.д.';
  }

  clickInfoImg5Card3() {
    this.titleImg5Card3 =
      'Степень защиты: IP20. Мощность: 15 Вт. Источник света: Светодиодная лампа. Светильники предназначены для установки в натяжные и подвесные потолки';
  }

  clickInfoImg1Card4() {
    this.titleImg1Card4 =
      'Удлинитель силовой УХ-6-1-ХХ: Степень защиты: IP20. Максимальный ток присоединяемых к удлинителю устройств: 6А. Кабель: ПВС 2*0,75. Служит для подключения оборудования, находящегося на удалении от основного источника питания.';
  }

  clickInfoImg2Card4() {
    this.titleImg2Card4 =
      'Удлинитель силовой на рамке УХ-6-1-ХХ-Р: Степень защиты: IP20. Максимальный ток присоединяемых к удлинителю устройств: 6А. Кабель: ПВС 2*0,75. Служит для подключения оборудования, находящегося на удалении от основного источника питания.';
  }

  clickInfoImg3Card4() {
    this.titleImg3Card4 =
      'Удлинитель на катушке (без розеток) УХ-16-1-хх-К: Степень защиты: IP20. Максимальный ток присоединяемых к удлинителю устройств: 16А. Количество и вид розеток в удлинителе: без розеток. Может использоваться в условиях складских и производственных помещений, на садово-дачных участках и дома при выполнении различных видов работ с использованием электроприборов, установок и т.п.';
  }

  clickInfoImg4Card4() {
    this.titleImg4Card4 =
      'Удлинитель на катушке с 4-мя розетками УХ-16-4-хх-К: Степень защиты: IP20. Максимальный ток присоединяемых к удлинителю устройств: 16А. Количество и вид розеток в удлинителе: 4 без заземления. Может использоваться в условиях складских и производственных помещений, на садово-дачных участках и дома при выполнении различных видов работ с использованием электроприборов, установок и т.п.';
  }

  clickInfoImg5Card4() {
    this.titleImg5Card4 =
      'Удлинитель на катушке с 4-мя розетками с/з УХ-16-4-хх-К: Степень защиты: IP20. Максимальный ток присоединяемых к удлинителю устройств: 16А. Количество и вид розеток в удлинителе: 4 с заземлением. Может использоваться в условиях складских и производственных помещений, на садово-дачных участках и дома при выполнении различных видов работ с использованием электроприборов, установок и т.п.';
  }

  clickInfoImg6Card4() {
    this.titleImg6Card4 =
      'Удлинитель на катушке с 4-мя розетками с/з IP44 УХ-16-4-хх-К: Степень защиты: IP44. Максимальный ток присоединяемых к удлинителю устройств: 16А. Количество и вид розеток в удлинителе: 4 с заземлением. Может использоваться в условиях складских и производственных помещений, на садово-дачных участках и дома при выполнении различных видов работ с использованием электроприборов, установок и т.п.';
  }

  constructor() {}

  ngOnInit() {}
}
