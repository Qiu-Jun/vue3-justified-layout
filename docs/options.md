# 配置

## containerWidth

框的宽度与填充无关

```html
<Vue3JustifiedLayout
  :items="items"
  :options="{
    containerWidth: 250
  }"
/>

<Vue3JustifiedLayout :items="items" : options="{ targetRowHeight: 80, containerWidth: 250 }" />
```

## containerPadding

提供一个整数来对所有边应用填充，或者提供一个对象来对每边应用单独的值。

```html
<Vue3JustifiedLayout
  :items="items"
  :options="{
    containerPadding: 50
  }"
/>

<Vue3JustifiedLayout
  :items="items"
  :options="{
    containerPadding: {
      top: 50,
      right: 5,
      bottom: 50,
      left: 5
    }
  }"
/>
```

<Vue3JustifiedLayout :items="items" :options="{ targetRowHeight: 80, containerPadding: 50 }" />

## boxSpacing

提供单个整数以在水平和垂直方向上应用间距，或提供对象以在每个轴上应用单个值。

```html
<Vue3JustifiedLayout
  :items="items"
  :options="{
    boxSpacing: 25
  }"
/>

<Vue3JustifiedLayout
  :items="items"
  :options="{
    boxSpacing: {
      horizontal: 25,
      vertical: 10
    }
  }"
/>
```

<Vue3JustifiedLayout :items="items" :options="{ targetRowHeight: 80, boxSpacing: 25 }" />

## targetRowHeight

它被称为目标是因为行高是我们用来很好地拟合所有东西的杠杆。该算法将尽可能接近目标行高度。

```html
<Vue3JustifiedLayout
  :items="items"
  :options="{
    targetRowHeight: 150
  }"
/>
```

<Vue3JustifiedLayout :items="items" :options="{ targetRowHeight: 150 }" />

## forceAspectRatio

在这里提供一个宽高比以返回该宽高比中的所有内容。使输入数组中的值无关。数组的长度仍然是相关的。

```html
<Vue3JustifiedLayout
  :items="items"
  :options="{
    forceAspectRatio: 1
  }"
/>
```

<Vue3JustifiedLayout :items="items" :options="{ targetRowHeight: 80, forceAspectRatio: 1 }" />

## showWidows

默认情况下，我们将在对齐布局的末尾返回项目，即使它们不构成一整行。如果为false，它们将从输出中被省略。

```html
<Vue3JustifiedLayout
  :items="items"
  :options="{
    showWidows: false
  }"
/>
```

<Vue3JustifiedLayout :items="items" :options="{ targetRowHeight: 80, showWidows: false }" />

## fullWidthBreakoutRowCadence

如果您希望每n行插入一个全宽度框，则可以使用此参数指定它。该行上的框将忽略targetRowHeight，使其本身与containerWidth - containerPadding一样宽，并与其长宽比定义一样高。只有当项目的宽高比>= 1时才会发生这种情况。

```html
<Vue3JustifiedLayout
  :items="items"
  :options="{
    fullWidthBreakoutRowCadence: 2
  }"
/>
```

<Vue3JustifiedLayout :items="items" :options="{ targetRowHeight: 80, fullWidthBreakoutRowCadence: 2 }" />
