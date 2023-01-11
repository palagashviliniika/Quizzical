export const warningVariant = {
    initial: {
      y: -30,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
        mass: 1,
        stiffness: 400
      }
    },
    exit: {
      opacity: 0
    }
  }

  export const welcomeVariant = {
    animate: {
      transition: {
        staggerChildren: 0.5,
        repeat: Infinity
      }
    }
  }

  export const welcomeVariantChildren = {
    initial: {
      opacity: 0,
      width: 0
    },
    animate: {
      width: 250,
      opacity: 1,
      transition: {
        duration: 1
      }
    },
    exit: {
      opacity: 0
    }
  }

  export const dotVariant = {
    initial: {
      opacity: 0,
      transition: {
        repeat: Infinity
      }
    },
    animate: {
      opacity: 100,
      transition: {
        duration: 0.5,
        repeat: Infinity
      }
    }
  }