<script lang="ts">
  export let title: string;
  export let coverImage: {
    fileName: string;
    url: string;
  };
</script>

<div class="shadow-md my-2">
  <img src={coverImage.url} alt={coverImage.fileName} />
  <p>{title}</p>
</div>
