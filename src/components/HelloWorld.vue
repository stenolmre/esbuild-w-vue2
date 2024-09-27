<template lang="pug">
div
  h2 {{ HELLO }}
  A
  B
  C
  D
  E
  F
  GA
  H
  I
  J
  K
  L
  M
  N
  O
  P
  Q
  R
  S
  T
  U
  V
  W
  X
  Y
  Z
</template>

<script>
import { HELLO } from '@root/constants'

import A from '@comp/etc/a.vue'
import B from '@comp/etc/b.vue'
import C from '@comp/etc/c.vue'
import D from '@comp/etc/d.vue'
import E from '@comp/etc/e.vue'
import F from '@comp/etc/f.vue'
import GA from '@comp/etc/ga.vue'
import H from '@comp/etc/h.vue'
import I from '@comp/etc/i.vue'
import J from '@comp/etc/j.vue'
import K from '@comp/etc/k.vue'
import L from '@comp/etc/l.vue'
import M from '@comp/etc/m.vue'
import N from '@comp/etc/n.vue'
import O from '@comp/etc/o.vue'
import P from '@comp/etc/p.vue'
import Q from '@comp/etc/q.vue'
import R from '@comp/etc/r.vue'
import S from '@comp/etc/s.vue'
import T from '@comp/etc/t.vue'
import U from '@comp/etc/u.vue'
import V from '@comp/etc/v.vue'
import W from '@comp/etc/w.vue'
import X from '@comp/etc/x.vue'
import Y from '@comp/etc/y.vue'
import Z from '@comp/etc/z.vue'

export default {
  name: 'HelloWorld',

  components: {
    A,
    B,
    C,
    D,
    E,
    F,
    GA,
    H,
    I,
    J,
    K,
    L,
    M,
    N,
    O,
    P,
    Q,
    R,
    S,
    T,
    U,
    V,
    W,
    X,
    Y,
    Z,
  },

  data() {
    return {
      HELLO,
    }
  },
}
</script>
