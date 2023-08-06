<!-- <template>
  <div>
    <input type="text" v-model="searchQuery" placeholder="Search…" @input="searchPosts" />
    <ul v-if="!searchQuery">
      <li v-for="(post, index) in filteredPosts" :key="index">
        <p>{{ post.title }}</p>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { usePostStore } from '../stores/PostStore';
import { ref, computed } from 'vue';

export default {
  setup() {
    const postStore = usePostStore();
    const searchQuery = ref('');

    // Define a computed property to get the filtered list of posts
    const filteredPosts = computed(() => {
      if (searchQuery.value) {
        return postStore.filteredList.filter(post =>
          post.title.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      } else {
        return [];
      }
    });

    const searchPosts = () => {
      // Update the searchQuery in the store
      postStore.searchQuery = searchQuery.value;
    };

    return {
      searchQuery,
      filteredPosts,
      searchPosts
    };
  }
};
</script> -->


 <template>
  <div>
    <input type="text" v-model="searchQuery" placeholder="Search…" @input="searchPosts" />
    <ul>
      <li v-for="(post, index) in filteredPosts" :key="index">
        <p>{{ post.title }}</p>
  
      </li>
    </ul>
  </div>
</template>

<script>
import { usePostStore } from '../stores/PostStore';
import { ref, computed } from 'vue';

export default {
  setup() {
    const postStore = usePostStore();
    const searchQuery = ref('');

    // Define a computed property to get the filtered list of posts
    const filteredPosts = computed(() => {
      if (searchQuery.value) {
        return postStore.filteredList.filter(post =>
          post.title.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      } else {
        return [];
      }
    });

    const searchPosts = () => {
      // Update the searchQuery in the store
      postStore.searchQuery = searchQuery.value;
    };

    return {
      searchQuery,
      filteredPosts,
      searchPosts
    };
  }
};
</script>
<!-- ------------------------------------------------------------------------------- -->
 <!-- <script>
import { usePostStore } from '../stores/PostStore';
import { ref,computed } from 'vue';
export default {
  setup() {
    const postStore = usePostStore()
    const searchQuery = ref('')

    // Define a computed property to get the filtered list of posts
    const filteredPosts = computed(() => {
      return postStore.filteredList.filter(post =>
        post.title.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    })

    const searchPosts = () => {
      // Update the searchQuery in the store
      postStore.searchQuery = searchQuery.value
    }

    return {
      searchQuery,
      filteredPosts,
      searchPosts
    }
  }
}
</script>  -->

