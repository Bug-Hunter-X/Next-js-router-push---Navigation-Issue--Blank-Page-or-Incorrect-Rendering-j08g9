# Next.js router.push() Navigation Issue

This repository demonstrates a common issue encountered when using the `router.push()` method in Next.js for client-side navigation.  The problem manifests as a blank page or incorrect rendering of the target page.

## Problem Description

The provided code shows a simple navigation setup. Clicking the button on the `/about` page is supposed to redirect to the `/contact` page.  However, the `/contact` page might not render correctly or appear completely blank due to an issue in how the router handles the navigation.

## Solution

The solution involves ensuring that data fetching mechanisms are correctly handled during the navigation process.  This might involve using `getStaticProps`, `getStaticPaths`, or `getServerSideProps`, depending on your application's data requirements. For simple cases, proper component lifecycle management might suffice.