<template>
  <section>
    <h3 class="my-career__title">Where did I work?</h3>
    <div>
      <table class="my-career__table">
        <thead>
          <tr>
            <th class="table-header table-column-1">Company</th>
            <th class="table-header table-column-2">Location</th>
            <th class="table-header table-column-3">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(job, index) in jobHistory" :key="index">
            <td class="table-comp-name">
              <a v-if="job.link" :href="job.link" target="_blank">{{
                job.company
              }}</a>
              <span v-else>{{ job.company }}</span>
            </td>
            <td class="table-comp-location">{{ job.location }}</td>
            <td class="table-position">{{ job.role }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      jobHistory: [
        { company: "HMS Eliza", location: "Danvers, MA", role: "QA Engineer" },
        {
          company: "Massachusetss Medical Society",
          location: "Waltham, MA",
          role: "QA Automation Engineer",
          link: "https://www.massmed.org/",
        },
        {
          company: "Aliaswire",
          location: "Burlington, MA",
          role: "QA Automation Engineer",
          link: "https://www.aliaswire.com/",
        },
        {
          company: "Advisor360",
          location: "Weston, MA",
          role: "QA Automation Engineer II",
          link: "https://www.advisor360.com/",
        },
        // Add more job entries as needed
      ],
    };
  },
};
</script>
